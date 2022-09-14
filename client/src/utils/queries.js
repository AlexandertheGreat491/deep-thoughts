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

export const QUERY_THOUGHT = gql`
query thought($id: ID!) {
  thought(_id: $id) {
    -id
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
