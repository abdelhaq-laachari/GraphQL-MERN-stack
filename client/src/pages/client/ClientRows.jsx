export default function ClientRow({ client }) {
  return (
    <tr class="bg-white dark:bg-gray-800">
      <td class="py-4 px-6">{client.fullName}</td>
      <td class="py-4 px-6">{client.email}</td>
      <td class="py-4 px-6">{client.phoneNumber}</td>
      <td class="py-4 px-6 space-x-3">
        <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded">
          Delete
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-bold py-2 px-4 rounded">
          Update
        </button>
      </td>
    </tr>
  );
}
