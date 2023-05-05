// import { Link } from "react-router-dom";
// import { textAtom } from "../components/Atoms";
// import { useAtom } from "jotai";
// import Footer from "../components/Footer";

export default function LandingPage() {
  // const [userName] = useAtom(textAtom);
  const caraKerja = [
    {
      title: "Registrasi Akun",
      text: "Registrasi akun agar kami bisa merekomendasikan",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fkerja1.svg?alt=media&token=c84298f3-3f6f-4fdf-a84d-cb06e93a52dc",
    },
    {
      title: "Pilih Beasiswa",
      text: "Pilih beasiswa yang telah disesuikan denganmu",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fkerja2.svg?alt=media&token=431bb8f7-6333-4f8c-8879-cdd13ded98d7",
    },
    {
      title: "Raih Beasiswa",
      text: "Semangat menyiapkan persyaratan beasiswa",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fkerja3.svg?alt=media&token=34fcfa5d-0bd1-4c68-bdc7-5528e42d2eb7",
    },
  ];

  const beasiswa = [
    {
      title: "Beasiswa FRANCE EXCELLENCE",
      registrasi: "01 Apr 2022",
      tutup: "01 Apr 2022",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/img%2FBEASISWA-BRI.jpg?alt=media&token=6a4c5aad-cda1-45ad-9cd9-0fcffbd90a6e",
    },
    {
      title: "Beasiswa FRANCE EXCELLENCE",
      registrasi: "01 Apr 2022",
      tutup: "01 Apr 2022",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/img%2FBEASISWA-BRI.jpg?alt=media&token=6a4c5aad-cda1-45ad-9cd9-0fcffbd90a6e",
    },
    {
      title: "Beasiswa FRANCE EXCELLENCE",
      registrasi: "01 Apr 2022",
      tutup: "01 Apr 2022",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/img%2FBEASISWA-BRI.jpg?alt=media&token=6a4c5aad-cda1-45ad-9cd9-0fcffbd90a6e",
    },
  ];
  return (
    // <div className="max-w-[90rem] w-full mx-auto px-4">
    <div>
      <div className="flex flex-col-reverse items-center my-14 max-w-[90rem] mx-auto px-4   sm:flex-row ">
        <div>
          <h1 className="text-6xl font-bold mb-7 leading-snug">
            Peluang Beasiswa Terbaik untuk Masa Depan Gemilang!
          </h1>
          <p className=" w-full mb-5 text-justify sm:w-3/4">
            Jangan Biarkan Biaya Pendidikan Menghalangi Mimpimu untuk Meraih
            Masa Depan Gemilang, Temukan Berbagai Informasi Beasiswa Terlengkap
            dan Akurat Hanya di Sini!"
          </p>
          <button
            type="button"
            className="mr-5 py-3 px-5 inline-flex justify-center items-center  rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            Daftar
          </button>
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
          >
            Jelajahi
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="w-full mx-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/Thesis-amico%201.svg?alt=media&token=33c10c00-7d26-4d75-8ec6-a0d4acba81f0"
            alt=""
            className="w-full"
          />
        </div>
      </div>

      <div className=" my-14">
        <h3 className="text-3xl font-bold text-center mb-5 ">
          Cara Kerja Kami
        </h3>

        <div className="flex gap-10 flex-wrap justify-center text-center ">
          {caraKerja.map((item, index) => (
            <div
              key={index}
              className="flex  border shadow-lg rounded-md  w-96 "
            >
              <div className="p-4 md:p-7">
                <img src={item.img} className=" w-32 mx-auto mb-5" alt="" />
                <h3 className="text-lg font-bold text-gray-800 ">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-800 ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col max-w-[90rem] mx-auto px-4 gap-10  my-24 flex   items-center  rounded-md sm:flex-row">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fimage%205.jpg?alt=media&token=30187456-4cee-458d-8af9-ee1d23073297"
          alt=""
          className="w-full"
        />
        <div>
          <h3 className="text-3xl font-bold mb-5">Misi Kami</h3>
          <p className="text-justify w-full sm:w-11/12">
            Kami adalah sebuah start up yang berfokus pada penyediaan informasi
            beasiswa untuk masyarakat Indonesia. Berawal dari kesadaran akan
            banyaknya anak-anak muda yang sulit mendapatkan akses ke pendidikan
            berkualitas karena faktor finansial, kami berkomitmen untuk menjadi
            solusi terdepan dalam memberikan informasi beasiswa yang akurat,
            terpercaya, dan mudah diakses.
          </p>
        </div>
      </div>

      <div className="my-16 max-w-[90rem] mx-auto px-4">
        <h3 className="text-3xl font-bold mb-7 text-center">
          Informasi Beasiswa Terbaru
        </h3>
        <div className="flex  gap-20 mb-5  items-center justify-center flex-col sm:flex-row">
          {beasiswa.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border shadow-md rounded-xl  w-11/12 sm:w-full  "
            >
              <img
                className="w-full  h-auto rounded-t-xl"
                src={item.img}
                alt="Image Description"
              />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 ">
                  {item.title}
                </h3>
                <div>
                  <div className="flex items-center  justify-between">
                    <p>Registrasi</p>
                    <p className=" ">{item.registrasi}</p>
                  </div>
                  <div className="flex items-center  justify-between">
                    <p>Tutup</p>
                    <p className=" ">{item.tutup}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex  rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
          >
            Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
}
