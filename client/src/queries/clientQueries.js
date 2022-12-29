import { gql } from "@apollo/client";

const GET_CLIENT = gql`
  query GetClients {
    clients {
      id
      fullName
      phoneNumber
      email
    }
  }
`;

export { GET_CLIENT };
