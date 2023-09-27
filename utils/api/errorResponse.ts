import { NextApiResponse } from "next";

export default function errorResponse(response: NextApiResponse, error: any) {
  let message =
    typeof error === "string" ? error : error.message ?? error.toString();
  return response.json({ sucess: false, message });
}
