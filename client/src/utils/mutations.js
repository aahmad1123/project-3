import { gql } from '@apollo/client';

export const ADD_USER = gql `
  mutation addUser ($firstName: String, $lastName: String, $email:String, $password:String){
    addUser (firstName: $firstName, lastName:$lastName, email:$email, password: $password) {
      token
      user {
         _id
         firstName
         lastName
         password
         email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login ($email: String, $password: String){
    login (email: $email, password: $password){
      token
      user{
        _id
        firstName
        lastName
        password
        email
      }
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation addQuestion($title: String!, $body: String!, $tags: String, $userId: ID!) {
    addQuestion(title: $title, body: $body, tags: $tags, userId: $userId) {
      _id
      title
      body
      tags
    }
  }
`;