/* eslint-disable react/prop-types */

const HeaderFilter = ({selecteGrid,removeGrid}) => {
  return (
    <div className="px-3 mb-4">
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
      <div className="flex items-center justify-between">
        <div className="pr-3 border-r border-gray-300">
          <select
            name=""
            id=""
            className="block w-40 text-base bg-gray-100 cursor-pointer dark:text-gray-400 dark:bg-gray-900"
          >
            <option value="">Sort by latest</option>
            <option value="">Sort by Popularity</option>
            <option value="">Sort by Price</option>
          </select>
        </div>
        <div className="flex items-center pl-3">
          <p className="text-xs text-gray-400">Show</p>
          <div className="px-2 py-2 text-xs text-gray-500 ">
            <select
              name=""
              id=""
              className="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400 dark:bg-gray-900"
            >
              <option value="">15</option>
              <option value="">17</option>
              <option value="">19</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeaderFilter