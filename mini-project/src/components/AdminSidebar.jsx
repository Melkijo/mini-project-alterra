import { Link, Outlet } from "react-router-dom";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { authAtom } from "./Atoms";

export default function UserSidebar() {
   const navigate = useNavigate();
   const [user, setUser] = useAtom(authAtom);
   const location = useLocation();
   const [url, setUrl] = useState(null);
   useEffect(() => {
      setUrl(location.pathname);
   }, [location]);
   const handleLogout = () => {
      setUser({ user: null, token: "" });
      cookies.remove("auth_token");
      localStorage.clear();
      navigate("/");
   };
   return (
      <>
         <header className="drop-shadow-xl flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4  ">
            <nav
               className=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
               aria-label="Global"
            >
               <Link to={"/"}>
                  <h3 className="text-2xl font-bold ">
                     BEASISWA<span className=" text-blue-500">KITA</span>
                  </h3>
               </Link>
               <button
                  type="button"
                  className="mr-16 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-medium "
                  onClick={() => handleLogout()}
               >
                  Logout
               </button>
            </nav>
         </header>
         <div className="flex">
            <div id="sidebar" className="  py-7  shadow-2xl  flex  h-screen ">
               <div className="w-56">
                  <h1 className=" ps-5 text-xl font-bold my-5 mt-10">
                     Hallo Admin
                  </h1>
                  <Link to="/adminPage">
                     <div
                        className={
                           " ps-5  py-2 text-lg border hover:bg-blue-600  hover:text-white" +
                           (url === "/adminPage"
                              ? "  text-white bg-blue-500  font-medium"
                              : "")
                        }
                     >
                        List Beasiswa
                     </div>
                  </Link>
                  <Link to="/adminPage/upload">
                     <div
                        className={
                           " ps-5  py-2 text-lg border hover:bg-blue-600  hover:text-white" +
                           (url === "/adminPage/upload"
                              ? "  text-white bg-blue-500  font-medium"
                              : "")
                        }
                     >
                        Upload Beasiswa
                     </div>
                  </Link>
                  <Link to="/adminPage/userList">
                     <div
                        className={
                           " ps-5  py-2 text-lg border hover:bg-blue-600  hover:text-white" +
                           (url === "/adminPage/userList"
                              ? "  text-white bg-blue-500  font-medium"
                              : "")
                        }
                     >
                        List Akun
                     </div>
                  </Link>
               </div>
            </div>
            <Outlet />
         </div>
      </>
   );
}
