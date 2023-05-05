import { Link } from "react-router-dom";
import { userId } from "../components/Atoms";
import { useAtom } from "jotai";
import { gql, useSubscription } from "@apollo/client";

export default function UserSidebar() {
  return (
    <>
      <div id="sidebar" className=" px-4 py-7  w-80  shadow-2xl h-screen  flex">
        <div>
          <Link to={"/"}>
            <h3 className="text-3xl font-bold ">
              BEASISWA<span className=" text-blue-500">KITA</span>
            </h3>
          </Link>

          <h1 className=" text-xl font-bold my-5 mt-10">Hallo Admin</h1>
          <div className="my-5">
            <Link to="/adminPage">List Beasiswa</Link>
          </div>
          <div className="my-5">
            <Link to="/adminPage/upload">Upload Beasiswa</Link>
          </div>
          <div className="my-5">
            <Link to="/adminPage/userList">List Akun</Link>
          </div>
        </div>
      </div>
    </>
  );
}
