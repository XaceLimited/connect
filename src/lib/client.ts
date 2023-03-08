import oac from "openapi-client-axios";
import authentication from "./authentication";
import { tokenParams, config } from "./config";
import { Client } from "./client.d";

const connect = async (): Promise<Client> => {
  try {
    const openapi = oac;
    const data = await authentication.getToken(tokenParams, { json: true });

    const instance = new openapi({
      definition: config.api_schema,
      axiosConfigDefaults: {
        headers: {
          Authorization: data.token.access_token,
        },
      },
    });

    await instance.init();

    const getClient = await instance.getClient<Client>();
    getClient.defaults.baseURL = config.api_base;

    return getClient;
  } catch (error) {
    throw error;
  }
}

export default connect;
