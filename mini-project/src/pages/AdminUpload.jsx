import { Link } from "react-router-dom";
import { gql, useMutation, useSubscription } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../components/Firebase";

const GET_BEASISWA = gql`
  subscription MySubscription {
    beasiswa {
      nama
      id
      created_at
      img_url
    }
  }
`;

const INSERT_BEASISWA = gql`
  mutation MyMutation(
    $nama: String!
    $img_url: String!
    $reg_date: Date!
    $deadline_data: Date!
    $desc: String!
  ) {
    insert_beasiswa(
      objects: {
        nama: $nama
        img_url: $img_url
        reg_date: $reg_date
        deadline_date: $deadline_date
        desc: $desc
      }
    ) {
      returning {
        id
      }
    }
  }
`;

const UPDATE_BEASISWA = gql`
  mutation MyMutation($id: uuid!, $img_url: String!) {
    update_beasiswa_by_pk(
      pk_columns: { id: $id }
      _set: { img_url: $img_url }
    ) {
      img_url
      id
    }
  }
`;
export default function AdminUpload() {
  const { loading, error, data } = useSubscription(GET_BEASISWA);
  const [insertBeasiswa] = useMutation(INSERT_BEASISWA);
  const [updateBeasiswa] = useMutation(UPDATE_BEASISWA);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { namaBeasiswa, imgBeasiswa } = data;
    const result = await insertBeasiswa({ variables: { nama: namaBeasiswa } });

    const imageRef = ref(storage, `img/${imgBeasiswa[0].name}`);
    uploadBytes(imageRef, imgBeasiswa[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        updateBeasiswa({
          variables: {
            id: result.data.insert_beasiswa.returning[0].id,
            img_url: url,
          },
        });
      });
    });

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
      {/* <Link to="/">Home</Link> */}
      {/* <h1 className="text-3xl font-bold">hai Admin</h1> */}
      {/* <div style={{ display: "flex", gap: 50 }}>
        {data.beasiswa.map((item) => (
          <div key={item.id}>
            <img src={item.img_url} alt="" width={200} />
            <h3>{item.nama}</h3>
          </div>
        ))}
      </div> */}
      <h1>Upload Beasiwa</h1> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Nama Beasiswa</label>
        <input
          type="text"
          {...register("namaBeasiswa", { required: true })}
          placeholder="Nama beasiswa"
        />
        <br />
        {errors.namaBeasiswa && <p>nama harus diisi</p>}
        <label htmlFor="">Gambar Beasiswa</label>

        <input type="file" {...register("imgBeasiswa", { required: true })} />
        <br />
        {errors.imgBeasiswa && <p>gambar harus diisi</p>}

        <input type="submit" value="Tambah" />
      </form>
    </>
  );
}
