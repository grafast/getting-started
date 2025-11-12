import { makeGrafastSchema, lambda } from "grafast";

export const schema = makeGrafastSchema({
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
