import ProductSideBarFiltersHooks from "../../Hooks/Products/ProductSideBarFiltersHooks";


/* eslint-disable react/prop-types */
const SideBar = ({ showFilter, handelShowFilter, getFilters }) => {
  const [
    catSelected,
    handelCatSelecte,
    brandSelected,
    handelBrandSelecte,
    catlimit,
    onClickViewMoreCat,
    allcategory,
    onClickViewMoreBrand,
    allBrands,
    brandLimit,
  ] = ProductSideBarFiltersHooks(getFilters);

  return (
    <div
      className={`w-64 absolute   z-10 transition-transform delay-200 ease-in-out  md:translate-x-0   md:w-1/4 md:relative md:block ${
        showFilter ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <div className="overflow-hidden mb-5  bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:shadow-md  rounded-md ">
        <div className="flex justify-end">
          <span
            onClick={handelShowFilter}
            className="inline-block md:hidden cursor-pointer h-full p-2 m-2 border rounded-md dark:fill-gray-50 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={16}
              width={12}
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </span>
        </div>
        <div className="bg-btn-color2 text-white dark:bg-gray-700 p-2"><h2 className="text-2xl font-bold  dark:text-gray-400"> Categories</h2></div>
        <div className="w-16  pb-2 mb-6 " />
        <div className="overflow-y-auto h-64 px-2  ">
          <ul>
            <li className="mb-4 px-1">
              <label
                htmlFor="0"
                className="flex items-center cursor-pointer dark:text-gray-400 "
              >
                <input
                  name="all"
                  id="0"
                  onChange={handelCatSelecte}
                  type="checkbox"
                  className="w-4 h-4 mr-2 focus:ring focus:ring-btn-color2 checked:bg-btn-color2 outline-btn-color2 "
                />
                <span className="text-lg">All</span>
              </label>
            </li>
            {allcategory.length >= 1 &&
              allcategory.map((cat) => {
                return (
                  <>
                    <li className="mb-4 px-1" key={cat._id}>
                      <label
                        htmlFor={cat._id}
                        className="flex items-center cursor-pointer dark:text-gray-400 "
                      >
                        <input
                          name={cat.name}
                          id={cat._id}
                          onChange={handelCatSelecte}
                          type="checkbox"
                          checked={catSelected.includes(cat._id) ? true : false}
                          className="w-4 h-4 mr-2 focus:ring focus:ring-btn-color2 checked:bg-btn-color2 outline-btn-color2 "
                        />
                        <span className="text-lg">{cat.name}</span>
                      </label>
                    </li>
                  </>
                );
              })}
          </ul>
          <span
            onClick={onClickViewMoreCat}
            className={`text-base font-medium cursor-pointer text-btn-color2  ${
              allcategory.length + 1 <= catlimit ? "hidden" : "block"
            }`}
          >
            View More
          </span>
        </div>
      </div>

      <div className=" mb-5 overflow-hidden bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:shadow-md rounded-md">
        <h2 className="text-2xl font-bold bg-btn-color2 text-white dark:bg-gray-700 p-2 dark:text-gray-400">Brand</h2>
        <div className="w-16 pb-2 mb-6 " />
        <div className="overflow-y-auto h-64 px-2">
          <ul>
            <li className="mb-4 px-1">
              <label
                htmlFor="00"
                className="flex items-center cursor-pointer dark:text-gray-400 "
              >
                <input
                  name="all"
                  id="00"
                  onChange={handelBrandSelecte}
                  type="checkbox"
                  className="w-4 h-4 mr-2 focus:ring focus:ring-btn-color2 checked:bg-btn-color2 outline-btn-color2   "
                />
                <span className="text-lg">All</span>
              </label>
            </li>
            {allBrands.length >= 1 &&
              allBrands.map((brand) => {
                return (
                  <>
                    {" "}
                    <li key={brand._id} className="mb-4  px-1">
                      <label
                        htmlFor={brand._id}
                        className="flex items-center cursor-pointer dark:text-gray-300"
                      >
                        <input
                          id={brand._id}
                          onChange={handelBrandSelecte}
                          checked={
                            brandSelected.includes(brand._id) ? true : false
                          }
                          name={brand.name}
                          type="checkbox"
                          className="w-4 h-4 mr-2 focus:ring focus:ring-btn-color2 checked:bg-btn-color2 outline-btn-color2 "
                        />
                        <span className="text-lg dark:text-gray-400">
                          {brand.name}
                        </span>
                      </label>
                    </li>
                  </>
                );
              })}
          </ul>
          <span
            onClick={onClickViewMoreBrand}
            className={`text-base font-medium cursor-pointer  text-btn-color2   ${
              allBrands.length + 1 <= brandLimit ? "hidden" : "block"
            }`}
          >
            View More
          </span>
        </div>
      </div>
     
    </div>
  );
};

export default SideBar;
