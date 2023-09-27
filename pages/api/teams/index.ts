import errorResponse from "@/utils/api/errorResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { getTeamsList } from "@/data/fetchers/getTeamsList";

export default async function getHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let { limit = 10, offset = 0 } = request.query;
  limit = Number(limit) || 10;
  offset = Number(offset) || 0;

  try {
    const results = await getTeamsList(limit, offset);
    return response.json({ success: true, data: results });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}
