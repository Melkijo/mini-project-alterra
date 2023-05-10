import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { authAtom } from "../components/Atoms";
import Swal from "sweetalert2";

const INSERT_USER = gql`
  mutation MyMutation(
    $depan: String!
    $belakang: String!
    $email: String!
    $password: String!
    $domisili: String!
    $pendidikan: String!
  ) {
    insert_users(
      objects: {
        namaDepan: $depan
        namaBelakang: $belakang
        email: $email
        password: $password
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

export default function RegisterPage() {
  const [insertUser] = useMutation(INSERT_USER);
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const pendidikanList = ["umum", "smp", "sma/smk", "S1", "S2"];
  const [authState, setAuthState] = useAtom(authAtom);

  const onSubmit = async (data) => {
    const { namaDepan, namaBelakang, email, password, domisili, pendidikan } =
      data;
    console.log(namaDepan, namaBelakang, email, password, domisili, pendidikan);
    const result = await insertUser({
      variables: {
        depan: namaDepan,
        belakang: namaBelakang,
        email,
        password,
        domisili,
        pendidikan,
      },
    });
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Akun Berhasil dibuat!!",
      });
      navigate("/masuk");
    }
  };
  const {
    register,
    handleSubmit,
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
  if (authState.token !== undefined) {
    return navigate("/");
  }
  return (
    <>
      <div className="flex items-center mx-auto  justify-center  gap-20 ">
        <div className="">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Flogin.jpg?alt=media&token=a4603db9-b9b6-45ec-9a40-12affe5eb243"
            alt=""
            className=" h-screen  object-cover "
          />
        </div>
        <div className="">
          <Link to={"/"}>
            <h3 className="text-6xl font-bold ">
              BEASISWA<span className=" text-blue-500">KITA</span>
            </h3>
            <p className="text-3xl">Dari kita untuk kita</p>
          </Link>

          <form onSubmit={handleSubmit(onSubmit)} className=" pt-16">
            <h3 className="text-3xl font-bold mb-5">Daftar</h3>

            <div className="flex gap-7">
              <div>
                <label
                  htmlFor="input-label"
                  className="block text-medium font-medium mb-2 "
                >
                  Nama depan*
                </label>
                <input
                  type="text"
                  {...register("namaDepan", { required: true })}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
                  placeholder="nama depan"
                />
                {errors.namaDepan && <p>nama depan harus diisi</p>}
              </div>
              <div>
                <label
                  htmlFor="input-label"
                  className="block text-medium font-medium mb-2 "
                >
                  Nama belakang*
                </label>
                <input
                  type="text"
                  {...register("namaBelakang", { required: true })}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
                  placeholder="nama belakang"
                />{" "}
                {errors.namaBelakang && <p>nama belakang harus diisi</p>}
              </div>
            </div>
            <label className="block text-medium font-medium mb-2 mt-5 ">
              Email*
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
              placeholder="you@site.com"
            />
            {errors.email && <p>email harus diisi</p>}

            <label className="block text-medium font-medium mb-2 mt-5 ">
              Password*
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
              placeholder="password"
            />
            {errors.password && <p>password harus diisi</p>}
            <div className="flex gap-7 mt-5">
              <div>
                <label className="block text-medium font-medium mb-2 ">
                  Domisili*
                </label>
                <select
                  {...register("domisili", { required: true })}
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                >
                  <option value="">Pilih</option>
                  {provinces.provinsi &&
                    provinces.provinsi.map((item, index) => (
                      <option value={item.nama} key={index}>
                        {item.nama}
                      </option>
                    ))}
                </select>
                {errors.domisili && <p>domisili harus diisi</p>}
              </div>
              <div>
                <label
                  htmlFor="input-label"
                  className="block text-medium font-medium mb-2 "
                >
                  Pendidikan saat ini*
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
                {errors.pendidikan && <p>email harus diisi</p>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full my-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              Registrasi
            </button>
          </form>
          <h5 className="">
            Sudah punya akun?{" "}
            <Link to="/masuk" className="  text-blue-500">
              masuk
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
}
