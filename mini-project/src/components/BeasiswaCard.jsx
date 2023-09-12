import Moment from "moment";

const BeasiswaCard = ({ item }) => {
   function getNumberOfDays(start, end) {
      const date1 = new Date(start);
      const date2 = new Date(end);

      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;

      // Calculating the time difference between two dates
      const diffInTime = date2.getTime() - date1.getTime();

      // Calculating the no. of days between two dates
      const diffInDays = Math.round(diffInTime / oneDay);

      return diffInDays;
   }
   return (
      <div className=" bg-white border shadow-md rounded-xl w-full  ">
         <img
            className="   rounded-t-xl h-64 object-cover w-full"
            src={item.img_url}
            alt="Image Description"
         />
         <div className="p-4 md:p-5   border-t-2">
            <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1">
               {item.nama}
            </h3>
            <div className=" bg-gray-100 p-3 flex flex-col gap-1 rounded-md">
               <div className="flex items-center  justify-between">
                  <p>Registrasi</p>
                  <p className=" font-medium">
                     {Moment(item.reg_date).format("MMM Do YY")}
                  </p>
               </div>
               <div className="flex items-center  justify-between">
                  <p>Tutup</p>
                  <p className=" ">
                     {Moment(item.deadline_date).format("MMM Do YY")}
                  </p>
               </div>
               {console.log(getNumberOfDays(item.reg_date, item.deadline_date))}
            </div>
         </div>
      </div>
   );
};

export default BeasiswaCard;
