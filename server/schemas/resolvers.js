const  User  = require('../models/User')
const  Question  = require('../models/Question')
const  Answer  = require('../models/Answer')


const resolvers = {
    Query: {
    //   users: async () => {
    //     return await User.find();
    //   },
    //   user: async (parent, { id }) => {
    //     return await User.findById(id).populate('questions').populate('answers');
    //   },
      questions: async () => {
        return await Question.find().populate('user').populate('answers');
      },
      question: async (parent, { id }) => {
        return await Question.findById(id).populate('user').populate('answers');
      },
      answers: async () => {
        return await Answer.find().populate('user').populate('question');
      },
      answer: async (parent, { id }) => {
        return await Answer.findById(id).populate('user').populate('question');
      },
    },
    Mutation: {}

}
module.exports = resolvers