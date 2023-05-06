import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { user } from "../components/Atoms";
import Swal from "sweetalert2";
const GET_USERS = gql`
  query MyQuery {
    users {
      id
      email
      password
      domisili
      pendidikan
    }
  }
`;

const admin = {
  email: "admin@gmail.com",
  password: "admin",
};

export default function LoginPage() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [userx, setUser] = useAtom(user);
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
          setUser(user);
          return true;
        }
      });

      if (match) {
        Swal.fire({
          icon: "success",
          title: `Selamat Datang`,
        });

        navigate("/userPage");
      } else {
        Swal.fire({
          icon: "error",
          title: "Data yang anda masukan salah!",
        });
      }
    }
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="flex items-center mx-auto  justify-center  gap-20 ">
        <div className="px-4 ">
          <Link to={"/"}>
            <h3 className="text-6xl font-bold ">
              BEASISWA<span className=" text-blue-500">KITA</span>
            </h3>
            <p className="text-3xl">Dari kita untuk kita</p>
          </Link>

          <form onSubmit={handleSubmit(onSubmit)} className=" mt-16">
            <h3 className="text-3xl font-bold mb-5">Masuk</h3>
            <label
              htmlFor="input-label"
              className="block text-medium font-medium mb-2 "
            >
              Email
            </label>
            <input
              type="email"
              id="input-label"
              {...register("email", { required: true })}
              className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
              placeholder="you@site.com"
            />
            {errors.email && <p>email harus diisi</p>}

            <label
              htmlFor="input-label"
              className="block text-medium font-medium mb-2 mt-5 "
            >
              Password
            </label>
            <input
              type="password"
              id="pass-label"
              {...register("password", { required: true })}
              className="py-3 px-4 block w-full border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500  "
              placeholder="password"
            />
            {errors.password && <p>password harus diisi</p>}

            <button
              type="submit"
              className="w-full my-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              Masuk
            </button>
          </form>
          <h5>
            Tidak punya akun?{" "}
            <Link to="/daftar" className="  text-blue-500">
              daftar
            </Link>
          </h5>
        </div>
        <div className="">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Flogin.jpg?alt=media&token=a4603db9-b9b6-45ec-9a40-12affe5eb243"
            alt=""
            className=" h-screen object-cover "
          />
        </div>
      </div>
    </>
  );
}
