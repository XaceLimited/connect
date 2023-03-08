import * as dotenv from "dotenv";

dotenv.config();

const {
  XACE_CLIENT_ID,
  XACE_CLIENT_SECRET,
  XACE_TOKEN_BASE_URL,
  XACE_TOKEN_AUTH_PATH,
  XACE_API_BASE_URL,
  XACE_API_SCHEMA_URL,
} = process.env;

if (
  !XACE_CLIENT_ID ||
  !XACE_CLIENT_SECRET ||
  !XACE_TOKEN_BASE_URL ||
  !XACE_TOKEN_AUTH_PATH ||
  !XACE_API_BASE_URL ||
  !XACE_API_SCHEMA_URL
) throw new Error("Environment not configured!");

export const client = {
  client: {
    id: XACE_CLIENT_ID,
    secret: XACE_CLIENT_SECRET,
  },
  auth: {
    tokenHost: XACE_TOKEN_BASE_URL,
    tokenPath: XACE_TOKEN_AUTH_PATH,
  },
};

export const tokenParams = {
  scope: "read_api",
};

export const config = {
  api_base: XACE_API_BASE_URL,
  api_schema: XACE_API_SCHEMA_URL,
};
