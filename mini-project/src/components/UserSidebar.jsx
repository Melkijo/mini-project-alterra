import { Link } from "react-router-dom";
import { userId } from "../components/Atoms";
import { useAtom } from "jotai";
import { gql, useSubscription } from "@apollo/client";

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

export default function UserSidebar() {
  const [userIdx] = useAtom(userId);
  const { loading, error, data } = useSubscription(GET_USERS, {
    variables: { id: userIdx },
  });
  console.log(data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div id="sidebar" className=" px-4 py-7  w-80  shadow-2xl h-screen">
        <Link to={"/"}>
          <h3 className="text-3xl font-bold ">
            BEASISWA<span className=" text-blue-500">KITA</span>
          </h3>
        </Link>

        <h1 className=" text-xl font-bold my-5 mt-10">
          Hallo {data.users_by_pk && data.users_by_pk.namaDepan}
        </h1>
        <div className="my-5">
          <Link to="/userPage/beasiswa">Rekomendasi Beasiswa</Link>
        </div>
        <div>
          <Link to="/userPage/detail">Akun</Link>
        </div>
      </div>
    </>
  );
}
