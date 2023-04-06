import _ from "lodash";
import React from "react";


const Pagination = ({ items, pageSize, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

 if (pagesCount === 1) return null;
 const pages = _.range(1, pagesCount+1);
//  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
// console.log(pages)
  return (
    <>
      <div  className="text-center m-4"  aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          {pages.map((page)=>(
             <li key={page} >
             <a href="#"
             onClick={()=>onPageChange(page)}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               {page}
             </a>
           </li>
           
          ))}
          
        </ul>
      </div>
    </>
  );
};

export default Pagination;
