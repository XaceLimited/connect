# Xace Banking API Client

### For available operations and endpoints please view [OpenAPI Specification](https://customer-api.xace.io/), swagger collection [click here](https://customer-api.xace.io/openapi)

## Install the package
```npm i @xace/connect``` or ```yarn add @xace/connect```

## Required environment variables:
Note: these must be stored inside either `.env`.
```sh
XACE_CLIENT_ID="" # issued client ID
XACE_CLIENT_SECRET="" # issued client secret
XACE_API_BASE_URL="https://customer-api.xace.io"
XACE_API_SCHEMA_URL="https://customer-api.xace.io/openapi/json" # JSON schema url this can be loaded from a local json file as well
XACE_TOKEN_BASE_URL="https://dev-862276.okta.com" # OKTA authorization url
XACE_TOKEN_AUTH_PATH="/oauth2/aus9vu1722iGtKryY4x7/v1/token" # OKTA authorization path
```

## Usage:
```js
const connect = require("@xace/connect");

async function run() {
  const client = await connect();

  const {
    data: { results },
  } = await client.getAccounts({
    page: 0,
    limit: 2,
  });

  console.table(results);
}

run();
```
