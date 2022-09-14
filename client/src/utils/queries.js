import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query thougts($username: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
