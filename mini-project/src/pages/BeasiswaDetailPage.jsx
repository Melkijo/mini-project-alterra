import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GET_BEASISWA = gql`
  query MyQuery($id: uuid!) {
    beasiswa_by_pk(id: $id) {
      nama
      img_url
      id
      created_at
      desc
    }
  }
`;

export default function BeasiswaDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BEASISWA, {
    variables: { id: id },
  });
  //   const { state } = useLocation();
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  //   tes = data{ variables: { id: "c6bc2537-80f7-4b4f-9f99-9e6aa1b09f07" } }
  //   const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="  mx-96  my-10 ">
        <h1 className="text-3xl font-bold mb-5">{data.beasiswa_by_pk.nama}</h1>

        <img
          src={data.beasiswa_by_pk.img_url}
          className=" w-1/2 mx-auto h-auto"
          alt=""
        />
        <p dangerouslySetInnerHTML={{ __html: data.beasiswa_by_pk.desc }}></p>
      </div>

      <Footer />
    </>
  );
}
