import { GraphQLClient } from "graphql-request";

import { getSdk } from "./__generated__";

const client = new GraphQLClient(`http://127.0.0.1:1337/graphql`, {
  headers: {
    Authorization: `Bearer 1de3df4f35a707e84dfbcc78f33b84fef3191b6aaee451d27a9a9476e912181983bb19e5ecc91b19995835da09d32a5038c22b2c82b52422286baf70750cda30ebc0644c5437dbdf2d7e087fe9f2bf9374fc240c7f837a0a6a48679be2e14b211fb17c280fe6127bc141dd8d76ebe80a922e8bdb3bd192ab607912d325668a40`,
  },
});
export const gql = getSdk(client);
export * from "./__generated__";
