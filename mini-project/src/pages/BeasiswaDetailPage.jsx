import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const GET_BEASISWA = gql`
  query MyQuery($id: uuid!) {
    beasiswa_by_pk(id: $id) {
      nama
      img_url
      id
      created_at
    }
  }
`;

export default function BeasiswaDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BEASISWA, {
    variables: { id: id },
  });
  //   const { state } = useLocation();
  console.log(id);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  //   tes = data{ variables: { id: "c6bc2537-80f7-4b4f-9f99-9e6aa1b09f07" } }
  //   const { id } = useParams();

  return (
    <>
      <Link to={"/"}>Home</Link>
      <h1>Ini Beasiswa detail</h1>
      <h3>Ini Detailnya</h3>
      <img src={data.beasiswa_by_pk.img_url} alt="" />
      <h1>{data.beasiswa_by_pk.nama}</h1>
    </>
  );
}
