import React from "react";

const Pagination = ({ pageCount }: any) => {
  return (
    <>
      <div className="text-center m-4" aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          {/* {pageCount.map((page: any) => (
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
