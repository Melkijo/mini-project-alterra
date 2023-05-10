export default function AboutPage() {
  return (
    <>
      <div className=" bg-blue-500  py-16">
        <div className="max-w-[90rem] w-full mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-5">Tentang Kami</h1>
          <p>
            Menemukan Peluang Terbaik untuk Mendapatkan Beasiswa Impian Anda
            dengan Informasi Seputar Beasiswa Terbaru Dapatkan keuntungan dari
            kesempatan emas untuk memperoleh beasiswa terbaik dengan mengikuti
            informasi seputar beasiswa terbaru.
          </p>
        </div>
      </div>

      <div className=" max-w-[90rem] mx-auto px-16  py-16 gap-10   my-16  grid grid-cols-1 md:grid-cols-2 items-center rounded-md border">
        <div className="flex justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Ftentang-img.png?alt=media&token=42e64130-7e0e-4afc-8601-4822594e0534"
            alt=""
            className="w-[600px] rounded-md"
          />
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-5 ">Siapa kami?</h3>
          <p className="leading-7">
            Kami adalah sebuah start up pendidikan yang bergerak di bidang
            pemberian informasi beasiswa. Visi kami adalah memberikan kesempatan
            yang sama bagi semua orang untuk mengakses pendidikan yang lebih
            baik melalui penyebaran informasi beasiswa yang akurat dan
            terpercaya. Kami memiliki tim yang terdiri dari para ahli di bidang
            pendidikan dan teknologi, yang memiliki komitmen untuk memajukan
            pendidikan di Indonesia dengan cara yang inovatif dan efektif. Kami
            berupaya untuk terus berkembang dan memberikan layanan yang lebih
            baik kepada masyarakat.
          </p>
        </div>
      </div>

      <div className="border rounded-md mb-16 grid grid-cols-1 max-w-[90rem] mx-auto md:grid-cols-2">
        <div className=" p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-5">Visi</h1>
          <p>
            Menjadi platform pemberi informasi beasiswa terdepan dan terpercaya
            di Indonesia untuk membantu meningkatkan akses pendidikan yang lebih
            baik bagi semua orang.
          </p>
        </div>
        <div className=" bg-blue-500 text-white  p-10 flex flex-col justify-center">
          {" "}
          <h1 className="text-2xl font-bold mb-5">Misi</h1>
          <ol className="list-decimal ps-5 space-y-5">
            <li>
              Menyediakan informasi beasiswa yang akurat, terpercaya, dan mudah
              diakses untuk semua orang di Indonesia.
            </li>
            <li>
              Menyediakan layanan konsultasi beasiswa yang memadai dan membantu
              para pelajar dan mahasiswa dalam mengakses berbagai kesempatan
              beasiswa yang tersedia.
            </li>
            <li>
              Menghubungkan para pemilik beasiswa dan penerima beasiswa agar
              mereka dapat saling mendukung dan berkembang bersama.
            </li>
          </ol>
        </div>{" "}
        <div className=" bg-blue-500 text-white flex flex-col justify-center p-10">
          {" "}
          <h1 className="text-2xl font-bold mb-5">Goal</h1>
          <ol className="list-decimal ps-5 space-y-5">
            <li>
              Meningkatkan akses pendidikan bagi masyarakat Indonesia dengan
              menyediakan informasi beasiswa yang akurat dan mudah diakses.
            </li>
            <li>
              Membantu para pelajar dan mahasiswa untuk meraih prestasi akademik
              dan pengembangan keterampilan melalui pemberian informasi
              beasiswa.
            </li>
            <li>
              Meningkatkan kerja sama dengan berbagai lembaga pendidikan dan
              organisasi lainnya untuk mencapai tujuan bersama dalam
              meningkatkan akses pendidikan.
            </li>
          </ol>
        </div>{" "}
        <div className="flex justify-center pt-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fabout-page.svg?alt=media&token=ef06448c-2f91-4079-ae29-1ffb0080cf77"
            alt=""
            className="w-[500px]"
          />
        </div>
      </div>
      <div className="hs-accordion-group  max-w-[75rem] mx-auto mb-16 ">
        <h3 className="text-4xl font-bold mb-5 text-center">
          Beberapa Pertanyaan?
        </h3>
        <div
          className="hs-accordion active"
          id="hs-basic-with-arrow-heading-one"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 border ps-5    border-medium "
            aria-controls="hs-basic-with-arrow-collapse-one"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            Siapa yang bisa mendapatkan beasiswa?
          </button>
          <div
            id="hs-basic-with-arrow-collapse-one"
            className="hs-accordion-content border-s-2 border-e-2 overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-one"
          >
            <p className="text-gray-800 p-5">
              Siapa saja bisa mendapatkan beasiswa, mulai dari pelajar SMA,
              mahasiswa, hingga profesional yang ingin mengambil program
              pascasarjana. Beberapa kriteria yang sering dijadikan acuan dalam
              pemberian beasiswa adalah prestasi akademik, keterampilan khusus,
              kebutuhan finansial, dan latar belakang budaya atau etnis.
            </p>
          </div>
        </div>
        <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
          <button
            className=" border ps-5    border-medium  hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500  "
            aria-controls="hs-basic-with-arrow-collapse-two"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Apakah ada risiko dalam mencari beasiswa?
          </button>
          <div
            id="hs-basic-with-arrow-collapse-two"
            className="hs-accordion-content border-s-2 border-e-2 hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-two"
          >
            <p className="text-gray-800 p-5">
              Risiko dalam mencari beasiswa sangat minim, namun ada beberapa hal
              yang perlu diperhatikan, seperti adanya penipuan yang
              mengatasnamakan penyedia beasiswa. Oleh karena itu, pastikan untuk
              memeriksa keabsahan informasi beasiswa yang diterima dan hindari
              mengirimkan informasi pribadi atau uang ke pihak yang tidak
              terpercaya.
            </p>
          </div>
        </div>
        <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
          <button
            className=" border ps-5    border-medium  hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500  "
            aria-controls="hs-basic-with-arrow-collapse-two"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Apakah data saya aman?
          </button>
          <div
            id="hs-basic-with-arrow-collapse-two"
            className="hs-accordion-content border-s-2 border-e-2 hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-two"
          >
            <p className="text-gray-800 p-5">
              Iya, datamu akan sangat aman. kami menggunakan data mu hanya untuk
              mencari dan merekomendasikan beasiswa yang sesuai dengan kriteria
              mu
            </p>
          </div>
        </div>
        <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
          <button
            className=" border ps-5    border-medium  hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500  "
            aria-controls="hs-basic-with-arrow-collapse-two"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Bagaimana cara mendapatkan beasiswa?
          </button>
          <div
            id="hs-basic-with-arrow-collapse-two"
            className="hs-accordion-content border-s-2 border-e-2 hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-two"
          >
            <p className="text-gray-800 p-5">
              Cara mendapatkan beasiswa bervariasi tergantung pada jenis
              beasiswa yang Anda cari. Namun, langkah umumnya adalah mencari
              informasi beasiswa yang tersedia, mengisi formulir aplikasi dengan
              lengkap, dan melengkapi dokumen pendukung seperti transkrip nilai,
              surat rekomendasi, dan essay. Pastikan untuk memperhatikan
              persyaratan dan tenggat waktu aplikasi yang ditentukan oleh
              penyedia beasiswa.
            </p>
          </div>
        </div>
        <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
          <button
            className=" border ps-5    border-medium  hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500  "
            aria-controls="hs-basic-with-arrow-collapse-two"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Apa manfaat dari mendapatkan beasiswa?
          </button>
          <div
            id="hs-basic-with-arrow-collapse-two"
            className="hs-accordion-content border-s-2 border-e-2 hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-two"
          >
            <p className="text-gray-800 p-5">
              Mendapatkan beasiswa memiliki banyak manfaat, di antaranya adalah
              mengurangi beban biaya pendidikan, memungkinkan seseorang untuk
              fokus pada studi mereka, meningkatkan kemampuan akademik dan
              keterampilan, serta membuka peluang karir yang lebih baik di masa
              depan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
