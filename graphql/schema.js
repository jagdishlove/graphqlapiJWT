const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

//Import queries
const { users } = require("./queries");

//Import mutations
const { register, login } = require("./mutations");

//Import queryTypes
const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: { users },
});
//Import mutationType
const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: { register, login },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
