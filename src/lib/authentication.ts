import { ClientCredentials } from "simple-oauth2";
import { client } from "./config";

const authentication = new ClientCredentials(client);

export default authentication;
