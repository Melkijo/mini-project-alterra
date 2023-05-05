import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="drop-shadow-xl flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4">
      <nav
        className="max-w-[90rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="flex-none text-2xl font-bold " to={"/"}>
            BEASISWA<span className=" text-blue-500">KITA</span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
          <div className="flex    gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <div className="mx-auto flex   gap-16">
              <Link
                className="font-normal text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                to={"/"}
                aria-current="page"
              >
                Utama
              </Link>
              <Link
                className="font-normal text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                to={"/beasiswa"}
              >
                Beasiswa
              </Link>
              <Link
                className="font-normal text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                to={"/tentang"}
              >
                Tentang
              </Link>
            </div>

            <div className="flex gap-7">
              <Link
                className="font-semibold text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                to={"/masuk"}
              >
                Masuk
              </Link>
              <Link
                className="font-semibold text-lg  hover:text-gray-400  dark:hover:text-gray-500"
                to={"/daftar"}
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
