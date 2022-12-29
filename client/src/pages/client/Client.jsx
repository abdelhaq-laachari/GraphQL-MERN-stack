import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../queries/clientQueries";
import ClientRow from "./ClientRows";
import Spinner from "../../components/spinner/Spinner";
import { Link } from "react-router-dom";
import Modal from "../../components/add/Modal";

function Client() {
  const { loading, error, data } = useQuery(GET_CLIENT);

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return (
    <>
      {!loading && !error && (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-200">
          <div className="flex w-3/4 p-2 justify-between">
            <h1 className="text-2xl text-gray-700 dark:text-gray-200">
              Client List
            </h1>
            {/* small button */}
            {/* <Link to="/client/add">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
                Add Client
              </button>
            </Link> */}
            <Modal/>
          </div>
          <table className="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Full name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone Number
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Client;
