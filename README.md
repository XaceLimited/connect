# Xace Banking API Client

### For available operations and endpoints please view [OpenAPI Specification](https://customer-api.xace.io/), swagger collection [click here](https://customer-api.xace.io/openapi)

## Required environment variables:
```sh
XACE_CLIENT_ID=""
XACE_CLIENT_SECRET=""
XACE_API_BASE_URL="http://127.0.0.1:9090"
XACE_API_SCHEMA_URL="http://127.0.0.1:9090/documentation/json"
XACE_TOKEN_BASE_URL="https://dev-862276.okta.com"
XACE_TOKEN_AUTH_PATH="/oauth2/aus9vu1722iGtKryY4x7/v1/token"
```

## Usage:
```js
const connect = require("xace-connect");

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
