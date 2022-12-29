export default function ClientRow({ client }) {
  return (
    <tr class="bg-white dark:bg-gray-800">
      <td class="py-4 px-6">{client.fullName}</td>
      <td class="py-4 px-6">{client.email}</td>
      <td class="py-4 px-6">{client.phoneNumber}</td>
      <td class="py-4 px-6">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
