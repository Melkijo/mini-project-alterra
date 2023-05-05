import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="flex justify-start sm:justify-between w-full max-w-[90rem] mx-auto px-4 flex-col  my-5 gap-10 sm:flex-row">
        <div>
          <h3 className="text-3xl font-bold ">
            BEASISWA<span className=" text-blue-500">KITA</span>
          </h3>
          <p>Dari kita untuk kita</p>
        </div>
        <div>
          <h5 className="text-xl font-medium mb-5">Navigasi</h5>
          <div className="flex flex-col gap-3">
            <Link to={"/"}>Utama</Link>

            <Link to={"/beasiswa"}>Beasiswa</Link>

            <Link to={"/tentang"}>Tentang</Link>
          </div>
        </div>
        <div>
          <h5 className="text-xl font-medium mb-5">Alamat</h5>
          <p>Jln Hoscokro minato no 31 Konaha Raya</p>
        </div>
        <div>
          <h5 className="text-xl font-medium mb-5">Kontak</h5>
          <p>+62 8177 5262 221</p>
          <p>example@gmail.com</p>
        </div>
      </div>
      <div className=" bg-gray-800 py-5">
        <div className="max-w-[90rem] mx-auto px-4 flex  justify-between">
          <p className="text-white">&copy; 2023 Copyright by mejodev</p>
          <div className="flex items-center gap-10">
            <i className="fa-brands fa-instagram fa-xl  text-white"></i>
            <i className="fa-brands fa-tiktok fa-xl text-white"></i>
            <i className="fa-brands fa-twitter fa-xl text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
}
