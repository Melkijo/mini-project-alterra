import { useAtom } from "jotai";
import { authAtom } from "../components/Atoms";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const UPDATE_USER = gql`
  mutation MyMutation(
    $id: uuid!
    $email: String!
    $namaDepan: String!
    $namaBelakang: String!
    $pendidikan: String!
    $domisili: String!
    $password: String!
  ) {
    update_users_by_pk(
      pk_columns: { id: $id }
      _set: {
        id: $id
        email: $email
        domisili: $domisili
        namaBelakang: $namaBelakang
        namaDepan: $namaDepan
        pendidikan: $pendidikan
        password: $password
      }
    ) {
      id
    }
  }
`;
export default function UserPage() {
  const [updateUser] = useMutation(UPDATE_USER);
  const [user, setUser] = useAtom(authAtom);
  const [provinces, setProvinces] = useState([]);
  const pendidikanList = ["umum", "smp", "sma/smk", "S1", "S2"];
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

  const onSubmit = async (data) => {
    const {
      id,
      namaDepan,
      namaBelakang,
      email,
      domisili,
      password,
      pendidikan,
    } = data;
    // console.log(data);
    console.log(user);
    const result = await updateUser({
      variables: {
        id,
        namaDepan,
        namaBelakang,
        email,
        domisili,
        pendidikan,
        password,
      },
    });
    if (result) {
      localStorage.setItem("userData", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: `data berhasil diubah!`,
      });
      setUser({ user: data, token: user.user.id });
      setEdit(false);
    }
  };
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="mt-10 px-10">
        <h1 className="text-5xl font-bold mb-5">Detail</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 my-5">
            <input
              type="text"
              className="hidden py-3 px-4 w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              {...register("id", { value: user.user.id })}
              readOnly={!edit}
            ></input>
            <div>
              <label htmlFor="">Nama depan</label>

              <input
                type="text"
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                defaultValue={user.user.namaDepan}
                {...register("namaDepan", {})}
                readOnly={!edit}
              ></input>
            </div>
            <div>
              <label htmlFor="">Nama belakang</label>
              <input
                type="text"
                className=" py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                defaultValue={user.user.namaBelakang}
                {...register("namaBelakang", {})}
                readOnly={!edit}
              ></input>
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              defaultValue={user.user.email}
              {...register("email", {})}
              readOnly={!edit}
            ></input>
            <input
              type="password"
              className="hidden  w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
              {...register("password", { value: user.user.password })}
              disabled={!edit}
            ></input>
          </div>
          <div className="flex gap-5 my-5">
            <div>
              <label htmlFor="">Domisili</label>
              <select
                {...register("domisili", { value: user.user.domisili })}
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                disabled={!edit}
              >
                <option defaultValue={user.user.domisili}>
                  {user.user.domisili}
                </option>
                {provinces.provinsi &&
                  provinces.provinsi.map((item, index) => (
                    <option value={item.nama} key={index}>
                      {item.nama}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="">Pendidikan</label>
              <select
                {...register("pendidikan", { value: user.user.pendidikan })}
                className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
                disabled={!edit}
              >
                {pendidikanList.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {edit ? (
            <div>
              <button
                className="mr-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                onClick={() => setEdit(false)}
              >
                Batal
              </button>{" "}
              <button
                type="submit"
                className="mr-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              >
                Simpan
              </button>
            </div>
          ) : (
            <button
              className="mr-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </>
  );
}
