import { lambda } from "grafast";
import { typedMakeGrafastSchema } from "./schema-generated.ts";

export const schema = typedMakeGrafastSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      addTwoNumbers(a: Int!, b: Int!): Int
    }
  `,
  objects: {
    Query: {
      plans: {
        addTwoNumbers(_, fieldArgs) {
          const { $a, $b } = fieldArgs;
          return lambda([$a, $b], ([a, b]) => a + b);
        },
      },
    },
  },
});
