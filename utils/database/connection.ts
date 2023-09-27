import { randomUUID } from "crypto";
import mongoose from "mongoose";

const retryTable: { [key: string]: number } = {};

const MAXIMUM_RETRY_ATTEMPTS: number = 5;

export default async function ensureConnection(
  retryId?: string
): Promise<boolean> {
  if (mongoose.connections[0]?.readyState) return true;

  if (retryId && retryTable[retryId] >= MAXIMUM_RETRY_ATTEMPTS) {
    delete retryTable[retryId];
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(process.env.MONGO_URL);
    return true;
  } catch (error) {
    retryId = retryId ?? randomUUID();
    retryTable[retryId] = (retryTable[retryId] ?? 0) + 1;
    return ensureConnection(retryId);
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string;
    }
  }
}
