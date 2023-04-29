import { Link } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

const GET_BEASISWA = gql`
  query GET_BEASISWA {
    beasiswa {
      nama
      id
      created_at
    }
  }
`;

const INSERT_BEASISWA = gql`
  mutation MyMutation($nama: String!) {
    insert_beasiswa(objects: { nama: $nama }) {
      returning {
        nama
        id
        created_at
      }
    }
  }
`;
export default function AdminPage() {
  const { loading, error, data } = useQuery(GET_BEASISWA);
  const [insertBeasiswa] = useMutation(INSERT_BEASISWA);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { namaBeasiswa } = data;
    const result = await insertBeasiswa({ variables: { nama: namaBeasiswa } });
    if (result) {
      alert("Beasiswa berhasil ditambah");
    } else {
      alert("gagal");
    }
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <h1 className="text-3xl font-bold">hai Admin</h1>
      <Link to="/">Home</Link>
      {data.beasiswa.map((item) => (
        <div key={item.id}>
          <div>Nama : {item.nama}</div>
        </div>
      ))}

      <h1>FORM</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("namaBeasiswa", { required: true })}
          placeholder="Nama"
        />
        <br />
        {errors.nama && <p>nama harus diisi</p>}

        <input type="submit" value="Tambah beasiswa" />
      </form>
    </>
  );
}
