import Teams from "@/data/models/teams";
import ensureConnection from "@/utils/database/connection";

export async function getTeamsList(limit: number = 50, offset: number = 0) {
  try {
    console.log("Connecting to MongoDB...");
    if (await ensureConnection()) {
      console.log("Connected to MongoDB.");
      const teams = await Teams.find();
      return teams;
    } else {
      console.log("Failed to connect to MongoDB.");
      throw "Error Connecting To DB";
    }
  } catch (error: any) {
    console.error("Error Fetching Teams", error);
    return [];
  }
}
