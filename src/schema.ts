import { typedMakeGrafastSchema } from "./schema-generated.ts";
import { add } from "./steps/add.ts";

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
          return add($a, $b);
        },
      },
    },
  },
});
