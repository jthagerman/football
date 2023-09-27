import errorResponse from "@/utils/api/errorResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { getTeamCurrentSeason } from "@/data/fetchers/getTeamCurrentSeason";

export default async function getHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { id } = request.query;
  id = String(id);

  try {
    const results = await getTeamCurrentSeason(id);
    return response.json({ success: true, data: results });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}
