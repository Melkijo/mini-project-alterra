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
            className="m-5  w-16 h-16 justify-center items-center   text-gray-800 hover:text-blue-600   text-md font-medium  border rounded-md"
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
