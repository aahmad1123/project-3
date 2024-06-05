import { gql } from '@apollo/client';

export const QUERY_QUESTIONS = gql`
query Questions {
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