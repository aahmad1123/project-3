const  User  = require('../models/User')
const  Question  = require('../models/Question')
const  Answer  = require('../models/Answer')


const resolvers = {
    Query: {
        questions: async () => {
            return Question.find();
        },

        questions: async (parent, { questionId }) => {
            return Question.findOne({_id: questionId})
        },
        answers: async () => {
            return Answer.find();
        },

        answers: async (parent, { answerId }) => {
            return Answer.findOne({_id: answerId})
        },
    }
}

module.exports = resolvers