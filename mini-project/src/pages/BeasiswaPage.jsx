import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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
      <h1 className="text-3xl font-bold">ini Beasiswa page</h1>
      <div style={{ display: "flex", gap: 50 }}>
        {data.beasiswa.map((item) => (
          <Link
            key={item.id}
            to={`/beasiswa/${item.id}`}
            state={{ data: item }}
          >
            <div>
              <img src={item.img_url} alt="" width={200} />
              <h3>{item.nama}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
