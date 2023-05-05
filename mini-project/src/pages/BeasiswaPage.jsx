import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const GET_BEASISWA = gql`
  query GET_BEASISWA {
    beasiswa {
      nama
      id
      created_at
      img_url
    }
  }
`;

export default function BeasiswaPage() {
  const { loading, error, data } = useQuery(GET_BEASISWA);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className=" bg-blue-500  py-16">
        <div className="max-w-[90rem] w-full mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-5">
            Informasi Seputar Beasiswa Terbaru
          </h1>
          <p>
            Menemukan Peluang Terbaik untuk Mendapatkan Beasiswa Impian Anda
            dengan Informasi Seputar Beasiswa Terbaru Dapatkan keuntungan dari
            kesempatan emas untuk memperoleh beasiswa terbaik dengan mengikuti
            informasi seputar beasiswa terbaru.
          </p>
        </div>
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-4">
        <div className="my-5">
          <div className="relative flex rounded-md shadow-sm">
            <input
              type="text"
              id="hs-search-box-with-loading-5"
              name="hs-search-box-with-loading-5"
              className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Input search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <button
              type="button"
              className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
            >
              {/* <span
                className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </span> */}
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center md:justify-between">
          {data.beasiswa.map((item, index) => (
            <Link
              key={item.id}
              to={`/beasiswa/${item.id}`}
              state={{ data: item }}
              className=" w-full md:w-80"
            >
              <div className=" bg-white border shadow-md rounded-xl   ">
                <img
                  className=" h-auto mx-auto  rounded-t-xl md:h-64"
                  src={item.img_url}
                  alt="Image Description"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 ">
                    {item.nama}
                  </h3>
                  <div>
                    <div className="flex items-center  justify-between">
                      <p>Registrasi</p>
                      {/* <p className=" ">{item.registrasi}</p> */}
                    </div>
                    <div className="flex items-center  justify-between">
                      <p>Tutup</p>
                      {/* <p className=" ">{item.tutup}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <nav className="flex justify-center items-center space-x-2 mb-5">
        <a
          className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          href="#"
        >
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
          href="#"
          aria-current="page"
        >
          1
        </a>
        <a
          className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
          href="#"
        >
          3
        </a>
        <a
          className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          href="#"
        >
          <span className="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </a>
      </nav>
    </>
  );
}
