import { gql, useSubscription, useMutation } from "@apollo/client";

const GET_USERS = gql`
  subscription MySubscription {
    users {
      id
      namaDepan
      namaBelakang
      email
      domisili
      pendidikan
    }
  }
`;

const DELETE_USER = gql`
  mutation MyMutation($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
export default function AdminUsers() {
  const { loading, error, data } = useSubscription(GET_USERS);
  const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_USER);

  const handleDeleteUser = (idx) => {
    deleteUser({
      variables: {
        id: idx,
      },
    });
  };
  if (loading || loadingDelete) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div>
        <div className="mt-10 px-10">
          <h1 className="text-5xl font-bold mb-5">List User</h1>
          <table className="w-full table-fixed  divide-y divide-gray-200 ">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Nama Depan
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Nama Belakang
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  domisili
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Pendidikan
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 ">
              {data.users &&
                data.users.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <p>{item.namaDepan}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <p>{item.namaBelakang}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800  overflow-x-auto">
                      <p>{item.email}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800  overflow-x-auto">
                      <p>{item.domisili}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <p>{item.pendidikan}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        type="button"
                        className="py-2 px-2 flex justify-center items-center gap-2 rounded-md border border-transparent  font-normal   text-xs bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all "
                        onClick={() => handleDeleteUser(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
