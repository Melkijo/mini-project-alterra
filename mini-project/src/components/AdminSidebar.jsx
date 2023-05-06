import { Link, Outlet } from "react-router-dom";
// import { userId } from "../components/Atoms";
import { useAtom } from "jotai";
import { gql, useSubscription } from "@apollo/client";

export default function UserSidebar() {
  return (
    <>
      <header class="drop-shadow-xl flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 ">
        <nav
          class=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <Link to={"/"}>
            <h3 className="text-3xl font-bold ">
              BEASISWA<span className=" text-blue-500">KITA</span>
            </h3>
          </Link>
        </nav>
      </header>
      <div className="flex">
        <div id="sidebar" className=" px-4 py-7  shadow-2xl  flex  h-screen ">
          <div className="w-56">
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
        <Outlet />
      </div>
    </>
  );
}
