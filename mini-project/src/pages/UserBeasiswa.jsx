import { gql, useQuery, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { user } from "../components/Atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

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

// const GET_USERS = gql`
//   query MyQuery($id: uuid!) {
//     beasiswa_by_pk(id: $id) {
//       id
//     }
//   }
// `;
export default function UserBeasiswa() {
  const { loading, error, data } = useSubscription(GET_BEASISWA);
  const [userx] = useAtom(user);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  // useEffect(() => {
  //   if (data && data.beasiswa) {
  //     const filteredBeasiswa = data.beasiswa.filter((item) => {
  //       return (
  //         (item.pendidikan === userx.pendidikan &&
  //           item.domisili === userx.domisili) ||
  //         (item.domisili === "semua" && item.pendidikan === "umum")
  //       );
  //     });
  //     setBeasiswaRekomendasi(filteredBeasiswa);
  //   }
  // }, [data, userx]);
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold my-10 mx-16">
          Rekomendasi Beasiswa untukmu!
        </h1>
        <div className="grid grid-cols-4 gap-10  mx-16">
          {data.beasiswa
            .filter((item) => {
              if (
                (item.pendidikan === userx.pendidikan ||
                  item.pendidikan === "umum") &&
                (item.domisili === userx.domisili || item.domisili === "semua")
              ) {
                return item;
              }
            })
            .map((item) => (
              <div>
                <Link
                  key={item.id}
                  to={`/beasiswa/${item.id}`}
                  state={{ data: item }}
                  className=""
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
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
