import { GraphQLClient } from "graphql-hooks";
import settings from "../settings";

const graphQLClient: GraphQLClient = new GraphQLClient({
  url: `https://${settings.domain}/api/2022-01/graphql.json`,
  headers: {
    "X-Shopify-Storefront-Access-Token": settings.token || "",
    "Content-Type": "application/graphql",
  },
});

export { graphQLClient };
