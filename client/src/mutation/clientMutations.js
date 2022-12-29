import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient(
    $fullName: String!
    $email: String!
    $phoneNumber: String!
  ) {
    addClient(fullName: $fullName, email: $email, phoneNumber: $phoneNumber) {
      id
      fullName
      email
      phoneNumber
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      fullName
      email
      phoneNumber
    }
  }
`;

const UPDATE_CLIENT = gql`
  mutation updateClient(
    $id: ID!
    $fullName: String!
    $email: String!
    $phoneNumber: String!
  ) {
    updateClient(
      id: $id
      fullName: $fullName
      email: $email
      phoneNumber: $phoneNumber
    ) {
      id
      fullName
      email
      phoneNumber
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT };
