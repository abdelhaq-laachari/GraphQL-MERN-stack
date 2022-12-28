import React from "react";
import { gql, useQuery } from "@apollo/client";

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

function Client() {
  const { loading, error, data } = useQuery(GET_CLIENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <>{!loading && !error && <h1>Client List</h1>}</>;
}

export default Client;
