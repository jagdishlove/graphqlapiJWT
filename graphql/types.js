const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = require("graphql");

const { User, Post, Comment } = require("../models");

const UserType = new GraphqlObjectType({
  name: "User",
  description: "User Type",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    displayName: { type: GraphQLString },
  }),
});

//PostType

const PostType = new GraphqlObjectType({
  name: "Post",
  description: "Post Type",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    auther: {
      type: UserType,
      resolve(parent, args) {
        return User.findById({ autherId: parent.id });
      },
    },
    comments: {
      type: GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find({ postId: parent.id });
      },
    },
  }),
});

const CommentType = new GraphqlObjectType({
  name: "Comments",
  description: "Comment type",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    post: {
      type: PostType,
      resolve(parent, args) {
        return Post.findById(parent.postId);
      },
    },
  }),
});

module.exports = { UserType, PostType, CommentType };
