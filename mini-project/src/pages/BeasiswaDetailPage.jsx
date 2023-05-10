import { gql, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GET_BEASISWA = gql`
  subscription MyQuery($id: uuid!) {
    beasiswa_by_pk(id: $id) {
      nama
      img_url
      id
      deadline_date
      reg_date
      domisili
      pendidikan
      desc
      link
    }
  }
`;

export default function BeasiswaDetail() {
  const { id } = useParams();
  const { loading, error, data } = useSubscription(GET_BEASISWA, {
    variables: { id: id },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Navbar />
      <div className="  mx-96  my-10 ">
        <h1 className="text-3xl font-bold mb-5">{data.beasiswa_by_pk.nama}</h1>
        <div className="w-full h-[500px]">
          <img
            src={data.beasiswa_by_pk.img_url}
            className=" w-full h-full object-contain "
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h3 className=" font-bold mt-5">Registrasi</h3>
              <p>{data.beasiswa_by_pk.reg_date}</p>
            </div>
            <div>
              <h3 className=" font-bold mt-5">Deadline</h3>
              <p>{data.beasiswa_by_pk.deadline_date}</p>
            </div>
          </div>
          <div>
            <div>
              <h3 className=" font-bold mt-5">Domisili</h3>
              <p>{data.beasiswa_by_pk.domisili}</p>
            </div>
            <div>
              <h3 className=" font-bold mt-5">Minimum Pendidikan</h3>
              <p>{data.beasiswa_by_pk.pendidikan}</p>
            </div>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: data.beasiswa_by_pk.desc }}
          className="mt-7"
        ></p>

        <h3 className=" font-bold mt-5">Link Pendaftaran</h3>
        <a
          href={data.beasiswa_by_pk.link}
          target="_blank"
          className="text-blue-500"
        >
          Disini
        </a>
      </div>

      <Footer />
    </>
  );
}
