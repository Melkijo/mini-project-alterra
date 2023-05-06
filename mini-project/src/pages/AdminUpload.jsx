import { Link } from "react-router-dom";
import { gql, useMutation, useSubscription } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../components/Firebase";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
    $reg_date: date!
    $deadline_date: date!
    $desc: String!
    $domisili: String!
    $pendidikan: String!
  ) {
    insert_beasiswa(
      objects: {
        nama: $nama
        img_url: $img_url
        reg_date: $reg_date
        deadline_date: $deadline_date
        desc: $desc
        domisili: $domisili
        pendidikan: $pendidikan
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
  const [provinces, setProvinces] = useState([]);
  const pendidikanList = ["umum", "smp", "sma/smk", "S1", "S2"];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  let provincesApi = "https://dev.farizdotid.com/api/daerahindonesia/provinsi";

  useEffect(() => {
    axios({
      method: "get",
      url: provincesApi,
    })
      .then((provinces) => {
        setProvinces(provinces.data);
      })

      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    register("desc", { required: true });
  }, [register]);

  const onDescChange = (e) => {
    setValue("desc", e);
  };

  const onSubmit = async (data) => {
    const { nama, img, domisili, pendidikan, registrasi, deadline, desc } =
      data;
    const result = await insertBeasiswa({
      variables: {
        nama,
        img_url: "temp",
        reg_date: registrasi,
        deadline_date: deadline,
        desc,
        domisili,
        pendidikan,
      },
    });

    const imageRef = ref(storage, `img/${img[0].name}`);
    uploadBytes(imageRef, img[0]).then((snapshot) => {
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
  const descContent = watch("desc");

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className=" my-10 ms-5">
        <h1 className=" text-3xl font-bold">Upload Beasiwa</h1> <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div>
              <label
                htmlFor="input-label"
                className="block text-medium font-medium mb-2 mt-4"
              >
                Nama beasiswa
              </label>
              <input
                type="text"
                id="input-label"
                {...register("nama", { required: true })}
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
                placeholder="nama beasiswa"
              />
              {errors.nama && <p>harus diisi</p>}
              <label
                htmlFor="input-label"
                className="block text-medium font-medium mb-2 mt-5"
              >
                Gambar beasiswa
              </label>
              <label htmlFor="file-input" className="sr-only">
                Choose file
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:bg-transparent file:border-0 file:bg-gray-200 file:mr-4 file:py-3 file:px-4"
                {...register("img", { required: true })}
              />
              {errors.img && <p>gambar harus diisi</p>}

              <div className="flex gap-7 mt-5">
                <div>
                  <label className="block text-medium font-medium mb-2 ">
                    Domisili
                  </label>
                  <select
                    {...register("domisili", { required: true })}
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                  >
                    <option value="semua">semua</option>
                    {provinces.provinsi &&
                      provinces.provinsi.map((item, index) => (
                        <option value={item.nama} key={index}>
                          {item.nama}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="input-label"
                    className="block text-medium font-medium mb-2 "
                  >
                    Pendidikan
                  </label>
                  <select
                    {...register("pendidikan", { required: true })}
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                  >
                    {pendidikanList.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-7 mt-5 ">
                <div>
                  <label className="block text-medium font-medium mb-2 ">
                    Registrasi
                  </label>
                  <input
                    type="date"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                    {...register("registrasi", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="input-label"
                    className="block text-medium font-medium mb-2 "
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                    {...register("deadline", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="input-label"
                className="block text-medium font-medium mb-2 mt-5 "
              >
                Description
              </label>
              <ReactQuill
                value={descContent}
                onChange={onDescChange}
                className="w-[750px] h-[300px]"
              />
            </div>
          </div>

          <button
            type="submit"
            className=" my-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            upload beasiswa
          </button>
        </form>
      </div>
    </>
  );
}
