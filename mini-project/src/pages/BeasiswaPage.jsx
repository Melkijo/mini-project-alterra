import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

const GET_BEASISWA = gql`
  query GET_BEASISWA {
    beasiswa {
      nama
      id
      created_at
      img_url
      reg_date
      deadline_date
    }
  }
`;

export default function BeasiswaPage() {
  const [itemSearch, setItemSearch] = useState("");
  const [searchParam] = useState(["nama"]);
  const { loading, error, data } = useQuery(GET_BEASISWA);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const searchBeasiswa = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(itemSearch.toLowerCase()) > -1
        );
      });
    });
  };
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
        <div className="my-5 flex  justify-between items-center">
          <h3 className="text-3xl font-bold">Semua Beasiswa</h3>
          <div className="relative flex rounded-md shadow-sm">
            <input
              type="text"
              id="hs-search-box-with-loading-5"
              name="hs-search-box-with-loading-5"
              className="py-3 px-4 pl-11 block w-full border border-gray-300 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Input search"
              value={itemSearch}
              onChange={(e) => setItemSearch(e.target.value)}
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
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 justify-center md:grid-cols-4 sm:grid-cols-2">
          {searchBeasiswa(data.beasiswa).map((item, index) => (
            <Link
              key={item.id}
              to={`/beasiswa/${item.id}`}
              state={{ data: item }}
              className=" w-full md:w-80"
            >
              <div className=" bg-white border shadow-md rounded-xl   ">
                <img
                  className=" h-auto   rounded-t-xl md:h-64 object-cover"
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
                      <p className=" ">{item.reg_date}</p>
                    </div>
                    <div className="flex items-center  justify-between">
                      <p>Tutup</p>
                      <p className=" ">{item.deadline_date}</p>
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
