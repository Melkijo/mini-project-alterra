import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../components/Firebase";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const GET_BEASISWA = gql`
  query MyQuery($id: uuid!) {
    beasiswa_by_pk(id: $id) {
      nama
      img_url
      domisili
      pendidikan
      reg_date
      deadline_date
      id
      desc
      link
    }
  }
`;

const UPDATE_BEASISWA = gql`
  mutation MyMutation(
    $id: uuid!
    $nama: String!
    $img_url: String!
    $domisili: String!
    $desc: String!
    $deadline_date: date!
    $reg_date: date
    $pendidikan: String!
    $link: String!
  ) {
    update_beasiswa_by_pk(
      pk_columns: { id: $id }
      _set: {
        nama: $nama
        img_url: $img_url
        domisili: $domisili
        desc: $desc
        deadline_date: $deadline_date
        reg_date: $reg_date
        pendidikan: $pendidikan
        link: $link
      }
    ) {
      id
    }
  }
`;

export default function AdminEditPage() {
  const { id } = useParams();
  const [tempImg, setTempImg] = useState("");
  const { loading, error, data } = useQuery(GET_BEASISWA, {
    variables: { id: id },
  });
  const [updateBeasiswa, { loading: loadingUpdate }] =
    useMutation(UPDATE_BEASISWA);
  const [provinces, setProvinces] = useState([]);
  const pendidikanList = ["umum", "smp", "sma/smk", "S1", "S2"];
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  useForm();

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

  const onDescChange = (e) => {
    setValue("desc", e);
  };

  const onSubmit = async (data) => {
    const {
      id,
      nama,
      img,
      domisili,
      pendidikan,
      registrasi,
      deadline,
      desc,
      link,
    } = data;
    let imgUrl = tempImg;
    if (img !== imgUrl) {
      console.log("tes");
      const imageRef = ref(storage, `img/${img[0].name}`);
      const snapshot = await uploadBytes(imageRef, img[0]);
      imgUrl = await getDownloadURL(snapshot.ref);
    }

    const result = await updateBeasiswa({
      variables: {
        id: id,
        nama,
        img_url: imgUrl,
        reg_date: registrasi,
        deadline_date: deadline,
        desc,
        domisili,
        pendidikan,
        link,
      },
    });

    if (result) {
      Swal.fire({
        icon: "success",
        title: `Beasiswa berhasil diperbaharui!`,
      });
      navigate("/adminPage");
    } else {
      alert("gagal");
    }
  };
  useEffect(() => {
    register("desc");
  }, [register, data]);

  useEffect(() => {
    if (data) {
      setTempImg(data.beasiswa_by_pk.img_url);
    }
  }, [data]);
  if (loading || loadingUpdate) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const descContent = watch("desc", data.beasiswa_by_pk.desc);

  return (
    <>
      <div>
        <div className="   mx-60  my-10 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold mb-5">Edit Beasiswa</h1>
              <div className="flex gap-5 mb-5">
                <Link>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    onClick={() => navigate(-1)}
                  >
                    Batal
                  </button>
                </Link>

                <button
                  type="submit"
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Update
                </button>
              </div>
            </div>
            <input
              type="text"
              {...register("id", { value: data.beasiswa_by_pk.id })}
              disabled
              className=" hidden"
            />
            <input
              className="text-3xl font-bold mb-5 w-full  border border-gray-700"
              type="text"
              {...register("nama", { value: data.beasiswa_by_pk.nama })}
            />

            <img
              src={data.beasiswa_by_pk.img_url}
              className=" w-1/2 mx-auto h-auto"
              alt=""
            />
            <div className="flex gap-5 mt-5">
              <div>
                <label
                  htmlFor="input-label"
                  className="block text-medium font-medium mb-2 "
                >
                  Gambar
                </label>
                <label htmlFor="file-input" className="sr-only">
                  Choose file
                </label>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  className="block w-full border border-gray-200 shadow-sm rounded-md text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:bg-transparent file:border-0 file:bg-gray-200 file:mr-4 file:py-3 file:px-4"
                  {...register("img", { value: data.beasiswa_by_pk.img_url })}
                />
              </div>

              <div>
                <label className="block text-medium font-medium mb-2 ">
                  Domisili
                </label>
                <select
                  {...register("domisili", {
                    value: data.beasiswa_by_pk.domisili,
                  })}
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
                  {...register("pendidikan", {
                    value: data.beasiswa_by_pk.pendidikan,
                  })}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                >
                  {pendidikanList &&
                    pendidikanList.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div>
                <label className="block text-medium font-medium mb-2 ">
                  Registrasi
                </label>
                <input
                  type="date"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                  {...register("registrasi", {
                    value: data.beasiswa_by_pk.reg_date,
                  })}
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
                  {...register("deadline", {
                    value: data.beasiswa_by_pk.deadline_date,
                  })}
                />
              </div>
              <div className="w-full mr-5">
                <label
                  htmlFor="input-label"
                  className="block text-medium font-medium mb-2 "
                >
                  Link
                </label>

                <input
                  className=" py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                  type="text"
                  {...register("link", { value: data.beasiswa_by_pk.link })}
                />
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
                className="w-full h-[250px]"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
