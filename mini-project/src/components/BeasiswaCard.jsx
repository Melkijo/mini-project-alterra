const BeasiswaCard = ({ item }) => {
  return (
    <div className=" bg-white border shadow-md rounded-xl   ">
      <img
        className="   rounded-t-xl h-64 object-cover w-full"
        src={item.img_url}
        alt="Image Description"
      />
      <div className="p-4 md:p-5  ">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1">
          {item.nama}
        </h3>
        <div className=" bg-gray-100 p-3 flex flex-col gap-1 rounded-md">
          <div className="flex items-center  justify-between">
            <p>Registrasi</p>
            <p className=" font-medium">{item.reg_date}</p>
          </div>
          <div className="flex items-center  justify-between">
            <p>Tutup</p>
            <p className=" ">{item.deadline_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeasiswaCard;
