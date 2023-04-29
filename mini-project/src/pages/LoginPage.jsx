import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { textAtom } from "../components/Atoms";

const GET_USERS = gql`
  query MyQuery {
    users {
      name
      email
      id
      password
    }
  }
`;

const admin = {
  email: "admin",
  password: "admin",
};

export default function LoginPage() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [userName, setUserName] = useAtom(textAtom);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (input) => {
    if (input.email == admin.email && input.password === admin.password) {
      alert("Berhasil masuk sebagai admin");
      navigate("/adminPage");
    } else {
      const match = data.users.find((user) => {
        if (user.email === input.email && user.password === input.password) {
          setUserName(user.name);
          return true;
        }
      });

      if (match) {
        alert("berhasil");

        navigate("/userPage");
      } else {
        alert("gagal");
      }
    }
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        kembali
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold">Login</h1>
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
        <button type="submit">Submit</button>
      </form>
      <h5>
        Tidak punya akun? <Link to="/daftar">daftar</Link>
      </h5>
      {data.users.map(({ id, email, password }) => (
        <div key={id}>
          <h3>{id}</h3>
          <h3>{email}</h3>
          <h3>{password}</h3>
        </div>
      ))}
    </>
  );
}
