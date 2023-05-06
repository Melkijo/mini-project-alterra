import { gql, useSubscription, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
const GET_BEASISWA = gql`
  subscription MySubscription {
    beasiswa {
      id
      nama
      img_url
      domisili
      desc
      deadline_date
      reg_date
      pendidikan
    }
  }
`;

const DELETE_BEASISWA = gql`
  mutation MyMutation($id: uuid!) {
    delete_beasiswa_by_pk(id: $id) {
      id
    }
  }
`;

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

export default function AdminBeasiswa() {
  const { loading, error, data } = useSubscription(GET_BEASISWA);
  const [deleteBeasiswa, { loading: loadingDelete }] =
    useMutation(DELETE_BEASISWA);

  const handleDeleteBeasiswa = (idx) => {
    deleteBeasiswa({
      variables: {
        id: idx,
      },
    });
  };

  const handleSendBeasiswa = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t6gq2hu",
        "template_zif90bs",
        form.current,
        "waNnSJ7omKkUb1Gc2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  if (loading || loadingDelete) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className="mt-10 px-10">
        <h1 className="text-5xl font-bold mb-5">List Beasiswa</h1>

        <table className="w-full table-fixed  divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Gambar
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase  "
              >
                Nama
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
                registrasi
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Deadline
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-1/4"
              >
                deskripsi
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
            {data.beasiswa &&
              data.beasiswa.map((item) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    <img
                      src={item.img_url}
                      alt=""
                      className="  w-[120px] h-auto"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800  overflow-x-auto">
                    <p>{item.nama}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 overflow-x-auto">
                    <p>{item.domisili}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 overflow-x-auto">
                    <p>{item.pendidikan}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 overflow-x-auto">
                    <p>{item.reg_date}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 overflow-x-auto">
                    <p>{item.deadline_date}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 overflow-x-auto ">
                    {item.desc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="grid grid-cols-2 gap-5">
                      <Link
                        to={`/adminPage/edit/${item.id}`}
                        state={{ data: item }}
                        className="text-blue-500"
                      >
                        <button
                          type="button"
                          className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent  font-normal  text-xs bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all "
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent  font-normal   text-xs bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all "
                        onClick={() => handleDeleteBeasiswa(item.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/beasiswa/${item.id}`}
                        state={{ data: item }}
                        className="text-blue-500"
                      >
                        View
                      </Link>
                      <div
                        className="text-blue-500 cursor-pointer"
                        onClick={() => handleSendBeasiswa()}
                      >
                        Bagikan
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
