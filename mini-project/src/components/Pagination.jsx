const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
   let pages = [];
   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pages.push(i);
   }

   return (
      <div>
         {pages.map((page, index) => {
            return (
               <button
                  key={index}
                  className="m-2  w-10 h-10 justify-end items-center   text-gray-800 hover:text-blue-600   text-md font-medium  border rounded-md"
                  onClick={() => setCurrentPage(page)}
               >
                  {page}
               </button>
            );
         })}
      </div>
   );
};

export default Pagination;
