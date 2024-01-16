/* eslint-disable react/prop-types */

import { useState } from "react";

const HeaderFilter = ({ selecteGrid, removeGrid ,handelShowFilter,getFilters}) => {
  const [sortValue,setSortValue]=useState("")

  const handelSort=(e)=>{
    setSortValue(e.target.value)
    const value=e.target.value
sessionStorage.setItem("sort",value)
getFilters()
  }
  console.log(sortValue)
  
  return (
    <div className=" mb-4 w-full">
      <div className="items-center justify-between  px-3 py-2 bg-white md:flex border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:shadow-md rounded-md">
        <div className=" hidden md:flex justify-start">
          <span
            onClick={selecteGrid}
            className="inline-block cursor-pointer h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="w-5 h-5 bi bi-grid-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </span>
          <span
            onClick={removeGrid}
            className="inline-block cursor-pointer h-full p-2 mr-3 border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="w-5 h-5 bi bi-grid-3x3-gap-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
          </span>
        </div>
        <div className="flex items-center gap-2 justify-between ">
          <span onClick={handelShowFilter} className="inline-block md:hidden cursor-pointer h-full  p-2  border rounded-md dark:fill-gray-50 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={16}
              width={16}
              viewBox="0 0 512 512"
            >
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </span>
          <div className="flex  items-center justify-end ">
          <div className=" border-gray-300">
            <select
              onChange={handelSort}
              value={sortValue}
              name=""
              id=""
              className="block w-40 text-base bg-gray-100 cursor-pointer dark:text-gray-400 dark:bg-gray-900"
            >
              <option value="Out of order">Out of order</option>
              <option value="Price From lowest to highest">Price From lowest to highest</option>
              <option value="Price From highest to lowest">Price From highest to lowest</option>
              <option value="Highest rated">Highest rated</option>
              <option value="best seller">best seller</option>
              <option value="quantity"> quantity</option>
            </select>
          </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFilter;
