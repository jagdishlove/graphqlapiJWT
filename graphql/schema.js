const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

//Import queries
const {} = require("./queries");

//Import mutations
const {} = require("./mutations");

//Import queryTypea
const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    //...queries
    
  }),
});
//Import mutationType
const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({}),
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
