const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    password: String
    email: String 
  }

  type Answer {
    _id: ID!
    body: String
    user: User
    question: Question
    upvotes: Int
    downvotes: Int
  }

  type Question {
    _id: ID!
    title: String
    body: String
    tags: [String]
    user: User
    answers: [Answer]
    upvotes: Int
    downvotes: Int
    createdAt: String
    updatedAt: String
  }

  type Query {
    questions: [Question]!
    question(id: ID!): Question
    answers: [Answer]!
    answer(id: ID!): Answer
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addQuestion(title: String!, body: String!, tags: [String], userId: ID!): Question
    addAnswer(body: String!, userId: ID!, questionId: ID!): Answer
    updateQuestion(id: ID!, title: String, body: String, tags: [String]): Question
    addUser(firstName: String, lastName: String, email: String, password: String): Auth
    updateUser(id: ID!, firstName: String, lastName: String, email: String): User
    login(email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
