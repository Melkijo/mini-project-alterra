import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const INSERT_USER = gql`
  mutation MyMutation($email: String!, $name: String!, $password: String!) {
    insert_users(objects: { email: $email, name: $name, password: $password }) {
      returning {
        created_at
        email
        id
        name
        password
      }
    }
  }
`;

export default function RegisterPage() {
  const [insertUser] = useMutation(INSERT_USER);
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [provinceDrop, setProvinceDrop] = useState("Provinsi");

  const onSubmit = async (data) => {
    const { email, name, password } = data;
    const result = await insertUser({ variables: { email, name, password } });
    if (result) {
      alert("Akun berhasil dibuat");
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
        console.log(provinces.data);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        kembali
      </button>
      <h1 className="text-3xl font-bold">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nama"
        />
        <br />
        {errors.name && <p>nama harus diisi</p>}
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <br />
        {errors.email && <p>email harus diisi</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />{" "}
        <br />
        {errors.password && <p>password harus diisi</p>}
        <br />
        {/* <Dropdown label={provinceDrop} dismissOnClick={false}>
          {provinces.provinsi &&
            provinces.provinsi.map((provinsi) => (
              <Dropdown.Item
                key={provinsi.id}
                onClick={() => setProvinceDrop(provinsi.nama)}
              >
                {provinsi.nama}
              </Dropdown.Item>
            ))}
        </Dropdown> */}
        <input type="submit" value="daftar" />
      </form>
      <h5>
        punya akun? <Link to="/masuk">masuk</Link>
      </h5>

      <button
        id="dropdownUsersButton"
        data-dropdown-toggle="dropdownUsers"
        data-dropdown-placement="bottom"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {provinceDrop}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownUsers"
        className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
      >
        <ul
          className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUsersButton"
        >
          {provinces.provinsi &&
            provinces.provinsi.map((provinsi) => (
              <li>
                <div
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => setProvinceDrop(provinsi.nama)}
                >
                  {provinsi.nama}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
