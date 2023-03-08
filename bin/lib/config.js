"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.tokenParams = exports.client = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const { XACE_CLIENT_ID, XACE_CLIENT_SECRET, XACE_TOKEN_BASE_URL, XACE_TOKEN_AUTH_PATH, XACE_API_BASE_URL, XACE_API_SCHEMA_URL, } = process.env;
if (!XACE_CLIENT_ID ||
    !XACE_CLIENT_SECRET ||
    !XACE_TOKEN_BASE_URL ||
    !XACE_TOKEN_AUTH_PATH ||
    !XACE_API_BASE_URL ||
    !XACE_API_SCHEMA_URL)
    throw new Error("Environment not configured!");
exports.client = {
    client: {
        id: XACE_CLIENT_ID,
        secret: XACE_CLIENT_SECRET,
    },
    auth: {
        tokenHost: XACE_TOKEN_BASE_URL,
        tokenPath: XACE_TOKEN_AUTH_PATH,
    },
};
exports.tokenParams = {
    scope: "read_api",
};
exports.config = {
    api_base: XACE_API_BASE_URL,
    api_schema: XACE_API_SCHEMA_URL,
};
//# sourceMappingURL=config.js.map