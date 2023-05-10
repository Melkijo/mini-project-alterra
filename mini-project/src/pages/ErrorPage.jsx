import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="my-10 flex flex-col items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2F4040.png?alt=media&token=78c3c0e3-dca5-4820-bdc3-45046afb88dd"
          alt=""
          className="w-1/2 mx-auto"
        />
        <h1 className="text-3xl font-bold text-center my-5">
          HALAMAN TIDAK DITEMUKAN!
        </h1>
        <p className="mb-5">
          Berhati hati lah saat mengujungi sebuah halaman, banyak hal yang tidak
          terduga!!
        </p>
        <Link to={"/"}>
          <button
            type="button"
            className=" py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            Utama
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
