"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi_client_axios_1 = __importDefault(require("openapi-client-axios"));
const authentication_1 = __importDefault(require("./authentication"));
const config_1 = require("./config");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const openapi = openapi_client_axios_1.default;
        const data = yield authentication_1.default.getToken(config_1.tokenParams, { json: true });
        const instance = new openapi({
            definition: config_1.config.api_schema,
            axiosConfigDefaults: {
                headers: {
                    Authorization: data.token.access_token,
                },
            },
        });
        yield instance.init();
        const getClient = yield instance.getClient();
        getClient.defaults.baseURL = config_1.config.api_base;
        return getClient;
    }
    catch (error) {
        throw error;
    }
});
exports.default = connect;
//# sourceMappingURL=client.js.map