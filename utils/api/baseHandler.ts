import { NextApiRequest, NextApiResponse } from "next";
import ensureConnection from "../database/connection";

export default function apiHandler(
  withDatabase: boolean,
  handlers: {
    [key: string]: (request: NextApiRequest, response: NextApiResponse) => void;
  }
) {
  return async function handler(
    request: NextApiRequest,
    response: NextApiResponse
  ) {
    try {
      if (withDatabase && !(await ensureConnection())) {
        return response.json({
          success: false,
          message: "Failed to connect to Database.",
        });
      }
      if (!handlers[request.method ?? "GET"]) {
        return response.json({
          success: false,
          message: "Request method is not supported.",
        });
      }
      return handlers[request.method ?? "GET"](request, response);
    } catch (error: any) {
      return response.json({
        success: false,
        message: error.message ?? error.toString(),
      });
    }
  };
}
