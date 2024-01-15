import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slice/CategorySlice";
import { getBrnads } from "../../redux/slice/BrandSlice";

/* eslint-disable react/prop-types */
const SideBar = ({ showFilter, handelShowFilter ,getFilters}) => {
  const [catlimit, setCatLimit] = useState(4);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  useEffect(() => {
    const data = { limit: catlimit };
    dispatch(getCategories(data));
  }, [catlimit]);
  const [allcategory, setAllCategory] = useState([]);
  useEffect(() => {
    if (category.data) {
      setAllCategory(category.data);
    }
  }, [category.data]);
  const onClickViewMoreCat = () => {
    setCatLimit(catlimit + 4);
  };

  const { brands } = useSelector((state) => state.brand);
  const [brandLimit, setBrandLimit] = useState(4);
  useEffect(() => {
    const data = { limit: brandLimit };
    dispatch(getBrnads(data));
  }, [brandLimit]);
  const [allBrands, setAllBrands] = useState([]);
  useEffect(() => {
    if (brands.data) {
      setAllBrands(brands.data);
    }
  }, [brands.data]);

  const onClickViewMoreBrand = () => {
    setBrandLimit(brandLimit + 4);
  };
  const [catSelected, setCatSelected] = useState([]);
  const handelCatSelecte = (e) => {
    const id = e.target.id;
    if (e.target.checked === true) {
      if (id === "0") {
        setCatSelected([]);
      }else if(id !=="0"){
        setCatSelected([...catSelected, id]);
      }
    }else{
      setCatSelected(catSelected.filter((item) => item !== id));
    }
  };
  let queryCat="";
   
  useEffect(() => {
    queryCat=catSelected.map((value)=>"category[in][]="+value  ).join("&")
    window.sessionStorage.setItem("catSelected",queryCat)
    setTimeout(() => {
      getFilters()
    }, 1000);

  }, [catSelected]);

  const [brandSelected, setBrandSelected] = useState([]);
  const handelBrandSelecte = (e) => {
    const id = e.target.id;
    if (e.target.checked === true) {
      if (id === "00") {
        setBrandSelected([]);
      }else if(id !=="00"){
        setBrandSelected([...brandSelected, id]);
      }
    }else{
      setBrandSelected(brandSelected.filter((item) => item !== id));
    }
  };
  let queryBrand="";
   
  useEffect(() => {
    queryBrand=brandSelected.map((value)=>"brand[in][]="+value  ).join("&")
    window.sessionStorage.setItem("brandSelected",queryBrand)
    setTimeout(()=>
    {
      getFilters()
    },1000)

  }, [brandSelected]);

  return (
    <div
      className={`w-64 absolute   z-50 transition-transform delay-200 ease-in-out  md:translate-x-0   md:w-1/4 md:relative md:block ${
        showFilter ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:shadow-md  rounded-md ">
        <div className="flex justify-end">
          <span
            onClick={handelShowFilter}
            className="inline-block md:hidden cursor-pointer h-full p-2 mr-3 border rounded-md dark:fill-gray-50 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={16}
              width={12}
              viewBox="0 0 384 512"
            >
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </span>
        </div>
        <h2 className="text-2xl font-bold dark:text-gray-400"> Categories</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400 " />
        <div className="overflow-y-auto h-64   ">
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
                  className="w-4 h-4 mr-2"
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
                          className="w-4 h-4 mr-2"
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
            className={`text-base font-medium cursor-pointer text-blue-500  dark:text-blue-400 ${
              allcategory.length + 1 <= catlimit ? "hidden" : "block"
            }`}
          >
            View More
          </span>
        </div>
      </div>

      <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:shadow-md rounded-md">
        <h2 className="text-2xl font-bold dark:text-gray-400">Brand</h2>
        <div className="w-16 pb-2 mb-6 border-b  dark:border-gray-400" />
        <div className="overflow-y-auto h-64">
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
                  className="w-4 h-4 mr-2"
                />
                <span className="text-lg">All</span>
              </label>
            </li>
            {allBrands.length >= 1 &&
              allBrands.map((brand) => {
                return (
                  <>
                    {" "}
                    <li key={brand._id} className="mb-4 px-1">
                      <label
                        htmlFor={brand._id}
                        className="flex items-center dark:text-gray-300"
                      >
                        <input
                          id={brand._id}
                          onChange={handelBrandSelecte}
                          checked={brandSelected.includes(brand._id) ? true : false}
                          name={brand.name}
                          type="checkbox"
                          className="w-4 h-4 mr-2"
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
            className={`text-base font-medium cursor-pointer  text-blue-500  dark:text-blue-400 ${
              allBrands.length + 1 <= brandLimit ? "hidden" : "block"
            }`}
          >
            View More
          </span>
        </div>
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
  );
};

export default SideBar;
