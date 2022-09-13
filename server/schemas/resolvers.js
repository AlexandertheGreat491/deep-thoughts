//  require statement for the User and Thought models
const { User, Thought } = require("../models");
// require statement for apollo-server-express
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("thoughts")
        .populate("friends");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
  },
  // resolver for login() and addUser() mutations
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async () => {},
  },
};

module.exports = resolvers;
