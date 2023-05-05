import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { userId } from "../components/Atoms";
const GET_USERS = gql`
  subscription MySubscription($id: uuid!) {
    users_by_pk(id: $id) {
      domisili
      email
      namaBelakang
      namaDepan
      password
      pendidikan
    }
  }
`;
export default function UserPage() {
  const [userIdx] = useAtom(userId);
  const { loading, error, data } = useSubscription(GET_USERS, {
    variables: { id: userIdx },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className="mt-10 px-10">
        <h1 className="text-5xl font-bold mb-5">Detail</h1>
        <form action="#">
          <div className="flex gap-5 my-5">
            <div>
              <label htmlFor="">Nama depan</label>
              <input
                type="text"
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                placeHolder={data.users_by_pk.namaDepan}
                readOnly
              ></input>
            </div>
            <div>
              <label htmlFor="">Nama belakang</label>
              <input
                type="text"
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                placeHolder={data.users_by_pk.namaBelakang}
                readOnly
              ></input>
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              placeHolder={data.users_by_pk.email}
              readOnly
            ></input>
          </div>
          <div className="flex gap-5 my-5">
            <div>
              <label htmlFor="">Domisili</label>
              <input
                type="text"
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                placeHolder={data.users_by_pk.domisili}
                readOnly
              ></input>
            </div>
            <div>
              <label htmlFor="">Pendidikan</label>
              <input
                type="text"
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                placeHolder={data.users_by_pk.pendidikan}
                readOnly
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="mr-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            Edit
          </button>
        </form>
      </div>
    </>
  );
}
