import Teams from "@/data/models/teams";
import ensureConnection from "@/utils/database/connection";

export async function getTeamByTeamName(teamName: string) {
  try {
    if (await ensureConnection()) {
      const team = await Teams.findOne({ schoolName: teamName });
      return team;
    } else {
      throw "Error Connecting To DB";
    }
  } catch (error: any) {
    console.error("Error Fetching Team", error);
    return null;
  }
}
