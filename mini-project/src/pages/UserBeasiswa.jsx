import { gql, useQuery, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { authAtom } from "../components/Atoms";
import { useAtom } from "jotai";
import BeasiswaCard from "../components/BeasiswaCard";

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

export default function UserBeasiswa() {
   const { loading, error, data } = useSubscription(GET_BEASISWA);
   const [userx] = useAtom(authAtom);

   if (loading) return "Loading...";
   if (error) return `Error! ${error.message}`;

   return (
      <>
         <div>
            <div className="flex justify-between items-center my-10 mx-16">
               <h1 className="text-3xl font-bold ">
                  Rekomendasi Beasiswa untukmu!
               </h1>
               <Link
                  to={"/beasiswa"}
                  className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
               >
                  Lihat Semua
               </Link>
            </div>

            <div className="grid grid-cols-3 gap-10  mx-16">
               {data.beasiswa
                  .filter((item) => {
                     if (
                        (item.pendidikan === userx.user.pendidikan ||
                           item.pendidikan === "umum") &&
                        (item.domisili === userx.user.domisili ||
                           item.domisili === "semua")
                     ) {
                        return item;
                     }
                  })
                  .map((item) => (
                     <div key={item.id}>
                        <Link
                           key={item.id}
                           to={`/beasiswa/${item.id}`}
                           state={{ data: item }}
                        >
                           <BeasiswaCard item={item} />
                        </Link>
                     </div>
                  ))}
            </div>
         </div>
      </>
   );
}
