import { Link } from "react-router-dom";
import { authAtom } from "./Atoms";
import { useAtom } from "jotai";
import { Navigate, useLocation } from "react-router-dom";
import cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Navbar() {
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
    Navigate("/");
  };

  return (
    <header className="drop-shadow-xl flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 ">
      <nav
        className="max-w-[90rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-2xl font-bold text-gray-800 "
            to={"/"}
          >
            BEASISWA<span className=" text-blue-500">KITA</span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className=" hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex  flex-col  gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <div className="mx-auto flex   gap-16 flex-col   sm:flex-row">
              <Link
                className={
                  " text-lg  hover:text-gray-400   " +
                  (url === "/" ? "  text-blue-500 font-medium" : "")
                }
                to={"/"}
                aria-current="page"
              >
                Utama
              </Link>
              <Link
                className={
                  " text-lg  hover:text-gray-400   " +
                  (url === "/beasiswa" ? "  text-blue-500 font-medium" : "")
                }
                to={"/beasiswa"}
              >
                Beasiswa
              </Link>
              <Link
                className={
                  " text-lg  hover:text-gray-400   " +
                  (url === "/tentang" ? "  text-blue-500 font-medium" : "")
                }
                to={"/tentang"}
              >
                Tentang
              </Link>
            </div>
            {user.user ? (
              <div>
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
                  <button
                    id="hs-mega-menu-basic-dr"
                    type="button"
                    className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium "
                  >
                    <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-500">
                      <span className="font-medium text-white leading-none">
                        {user.user.namaDepan.slice(0, 1).toUpperCase()}
                        {user.user.namaBelakang.slice(0, 1).toUpperCase()}
                      </span>
                    </span>
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                    {user.user.namaDepan === "admin" ? (
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                        to={"/adminPage"}
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                        to={"/userPage/"}
                      >
                        Dashboard
                      </Link>
                    )}

                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-7">
                <Link
                  className="font-semibold text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                  to={"/masuk"}
                >
                  Masuk
                </Link>
                <div className="font-semibold text-lg">|</div>
                <Link
                  className="font-semibold text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                  to={"/daftar"}
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
