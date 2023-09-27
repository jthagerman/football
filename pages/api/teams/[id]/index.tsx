import errorResponse from "@/utils/api/errorResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { getTeamByTeamName } from "@/data/fetchers/getTeamByTeamName";

export default async function getHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { id } = request.query;
  id = String(id);

  try {
    const results = await getTeamByTeamName(id);
    return response.json({ success: true, data: results });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}
