
const SideBar = () => {
  return (
    <div className="w-full  md:w-1/4 lg:block ">
        <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:shadow-md  rounded-md ">
          <h2 className="text-2xl font-bold dark:text-gray-400"> Categories</h2>
          <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
          <ul>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-400 "
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg">Biscuits</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-400 "
              >
                <input type="checkbox" className="w-4 h-4 mr-2 " />
                <span className="text-lg">Fruits</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-400"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg">Seafood</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-400"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg">Vegetables</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-400"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg">Frozen Foods &amp; Staples</span>
              </label>
            </li>
          </ul>
          <a
            href="#"
            className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400"
          >
            View More
          </a>
        </div>
        <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:shadow-md rounded-md">
          <h2 className="text-2xl font-bold dark:text-gray-400">
            Product Status
          </h2>
          <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
          <ul>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">In Stock</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">On Sale</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:shadow-md rounded-md">
          <h2 className="text-2xl font-bold dark:text-gray-400">Brand</h2>
          <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
          <ul>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">Apple</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">Oreo</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">Mango</span>
              </label>
            </li>
            <li className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">Nebico</span>
              </label>
            </li>
          </ul>
          <a
            href="#"
            className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400"
          >
            View More
          </a>
        </div>
        <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:shadow-md rounded-md">
          <h2 className="text-2xl font-bold dark:text-gray-400">Price</h2>
          <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400" />
          <div>
            <input
              type="range"
              className="w-full h-1 mb-4 bg-blue-100 rounded appearance-none cursor-pointer"
              max={100}
              defaultValue={50}
            />
            <div className="flex justify-between ">
              <span className="inline-block text-lg font-bold text-blue-400 ">
                $1
              </span>
              <span className="inline-block text-lg font-bold text-blue-400 ">
                $500
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SideBar