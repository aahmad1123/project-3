const  {User, Question, Answer}  = require('../models');
const { AuthenticationError, signToken } = require('../utils/Auth');


const resolvers = {
    Query: {
    //   users: async () => {
    //     return await User.find();
    //   },
    //   user: async (parent, { id }) => {
    //     return await User.findById(id).populate('questions').populate('answers');
    //   },
      questions: async () => {
        try {
          return await Question.find().populate('user').populate('answers');
        } catch (err) {
          console.error('Error fetching questions:', err);
          throw new Error('Failed to fetch questions');
        }
      },
      question: async (parent, { id }) => {
        try {
          return await Question.findById(id).populate('user').populate('answers');
        } catch (err) {
          console.error('Error fetching question:', err);
          throw new Error('Failed to fetch question');
        }
      },
      answers: async () => {
        try {
          return await Answer.find().populate('user').populate('question');
        } catch (err) {
          console.error('Error fetching answers:', err);
          throw new Error('Failed to fetch answers');
        }
      },
      answer: async (parent, { id }) => {
        try {
          return await Answer.findById(id).populate('user').populate('question');
        } catch (err) {
          console.error('Error fetching answer:', err);
          throw new Error('Failed to fetch answer');
        }
      },
    },
    Mutation: {
        addQuestion: async (parent, { title, body, tags, userId}) => {
            const user = await User.findById(userId);
            if (!user) {
                throw new AuthenticationError('User not found');
            }
            const question = new Question({
                title,
                body,
                tags,
                user: userId,
            });
            await question.save();
            return (await question.populate('user')).populate('answers');
        },

        addAnswer: async (parent, { body, userId, questionId }) => {
            const user = await User.findById(userId);
            const question = await Question.findById(questionId);
            if (!user || !question) {
                throw AuthenticationError('User or Question not found');
            }
            const answer = new Answer({
                body,
                user: userId,
                question: questionId,
            });
            await answer.save();
            question.answers.push(answer);
            await question.save();
            return answer.populate('user').populate('question');
        },

        addUser: async (parent, args) => {
          const user = await User.create(args)
          const token = signToken(user)
          return {token, user}
        },

        updateQuestion: async (parent, {_id, title, body, tags }) => {
            const question = await Question.findByIdAndUpdate(
                _id,
                { title, body, tags },
                { new: true  }
            );
            return (await question.populate('user')).populate('answers');
            
                
            },
            
        updateUser: async (parent, { _id, firstName, lastName, email }) => {
            return await User.findByIdAndUpdate(
                _id,
                { firstName, lastName, email },
                { new: true }
        );
        },

        
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            console.log(user)
            if (!user) {
              console.log("one")
                throw AuthenticationError;
            }
            const correctPw = await user.matchPassword(password);
            if (!correctPw) {
              console.log("two")
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user };
    },



    
    }

}
module.exports = resolvers