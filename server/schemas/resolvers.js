//  require statement for the User and Thought models
const { User, Thought } = require("../models");
// require statement for apollo-server-express
const { AuthenticationError } = require("apollo-server-express");
// imports the signToken() function
const { signToken } = require("../utils/auth");

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
    me: async (parent, args, context) => {
      if (context.user){
        const userData = await User.findOne({})
        .select('-_v -password')
        .populate('thoughts')
        .populate('friends');
  
        return userData;
      }
      throw new AuthenticationError('Not logged in');
      }
      
  },
  // resolver for login() and addUser() mutations
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect crendentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
