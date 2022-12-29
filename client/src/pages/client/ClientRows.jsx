import { useMutation } from "@apollo/client";
import { DELETE_CLIENT, ADD_CLIENT } from "../../mutation/clientMutations";
import { GET_CLIENT } from "../../queries/clientQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache) {
      const { clients } = cache.readQuery({ query: GET_CLIENT });
      cache.writeQuery({
        query: GET_CLIENT,
        data: { clients: clients.filter((c) => c.id !== client.id) },
      });
    },
  });

  return (
    <tr className="bg-white dark:bg-gray-800">
      <td className="py-4 px-6">{client.fullName}</td>
      <td className="py-4 px-6">{client.email}</td>
      <td className="py-4 px-6">{client.phoneNumber}</td>
      <td className="py-4 px-6 space-x-3">
        <button
          onClick={deleteClient}
          className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-bold py-2 px-4 rounded">
          Update
        </button>
      </td>
    </tr>
  );
}
