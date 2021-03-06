const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} = require("graphql");

// const {} = require(".types");

const { User } = require("../models");
const { createJwsToken } = require("../util/auth");
const { json } = require("express/lib/response");

const register = {
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { username, email, password, displayName } = args;
    const user = new User({ username, email, password, displayName });
    await user.save();
    const token = createJwsToken(user);
    return token;
  },
};

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email });
    console.log(user);
    if (!user || args.password !== user.password) {
      throw new Error("Invalid credentials");
    }

    const token = createJwsToken(user);
    return token;
  },
};

module.exports = { register, login };
