"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_oauth2_1 = require("simple-oauth2");
const config_1 = require("./config");
const authentication = new simple_oauth2_1.ClientCredentials(config_1.client);
exports.default = authentication;
//# sourceMappingURL=authentication.js.map