const typeDefs = `
type User {
   _id: ID
   firstName: String!
   lastName: String!
   password: String
   email: String 
}

type Answer{
    _id: ID
    body: String
    user: [User]
    question: [Question]
    upvotes: Int
    downvotes: Int
}

type Question {
    _id: ID
    title: String
    body: String
    tags: String
    user: User
    answer: Answer
    upvotes: Int
    downvotes: Int
    createdAt: String
    updatedAt: String
}

type Query {
    questions: [Question]!
    question(_id: ID): Question
    answer: [Answer]!
    answer(_id: ID): Answer
}

type Mutation {
    addQuestion(title: String! body: String!, tags: String, user:User)
    addAnswer(body: String!, user: User)
    updateQuestion(title: String, body: String, tags: String)
    addUser(firstName: String, lastName: String, email:String, password:String)
    updateUser(firstName: String, lastName: String, email: String,)
    login(email: String!, password: String!): Auth
}

`
module.exports= typeDefs