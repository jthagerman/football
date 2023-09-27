import Teams from "@/data/models/teams";
import ensureConnection from "@/utils/database/connection";
import Games from "@/data/models/games";
import { CURRENT_SEASON } from "@/data/constants";

export async function getTeamCurrentSeason(teamName: string) {
  try {
    if (await ensureConnection()) {
      const team = await Teams.findOne({ schoolName: teamName });

      if (team) {
        const teamId = team._id;
        const games = await Games.find({
          $or: [{ homeTeamID: teamId }, { awayTeamID: teamId }],
          seasonID: CURRENT_SEASON,
        })
          .sort({ date: -1 })
          .populate("homeTeamID awayTeamID"); // Use populate to fetch the referenced data
        return {
          team,
          games,
        };
      } else {
        return null;
      }
    } else {
      throw "Error Connecting To DB";
    }
  } catch (error: any) {
    console.error("Error Fetching Team", error);
    return null;
  }
}
