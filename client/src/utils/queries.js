import { gql } from '@apollo/client';

export const QUERY_QUESTIONS = gql`
 query Questions{
    questions {
        title
        body
        _id
        user {
          firstName
          lastName
        }
      }
    }
`;

export const QUERY_QUESTION = gql`
query question($_id: ID!) {
  question(_id: $_id) {
    title
    body
    _id
    user {
      firstName
      lastName
    }
  }
}
`