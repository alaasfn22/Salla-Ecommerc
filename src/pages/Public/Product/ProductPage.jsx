/* eslint-disable no-unused-vars */
import ProductCard from "../../../components/products/ProductCard";
import LoadingSpinner from "../../../helper/Spinner";
import CustomePagination from "../../../utils/Pagination";
import GetProductPageHook from "../../../Hooks/Products/GetProductPageHook";
import SideBar from "../../../components/products/sideBar";
import HeaderFilter from "../../../components/products/HeaderFilter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQueryAllPeoducts } from "../../../redux/slice/ProductSlice";
import Landing from "../../../utils/Landing";
import Pagination from "../../../utils/Pagination/Pagination";

const ProductPage = () => {
const [allProducts, pageCount, handelOnSelectPage, isLoading, error,
  customeGrid,selecteGrid,removeGrid,showFilter,handelShowFilter,getFilters,setShowFilter]=GetProductPageHook()

  return (
   <div>
    <Landing curentPAge="Shoping Page"/>
     <section className="px-2 lg:container      dark:bg-gray-800 ">
      <div className=" py-4 lg:py-6 ">
        <div className="flex  mb-24 ">
          <SideBar getFilters={getFilters} handelShowFilter={handelShowFilter} showFilter={showFilter} />
          <div  className="grow w-full md:px-3 md:w-3/4 overflow-hidden   ">
            <HeaderFilter  getFilters={getFilters}  handelShowFilter={handelShowFilter} selecteGrid={selecteGrid} removeGrid={removeGrid}/>
            <div onClick={()=>setShowFilter(false)} className="dark:p-4 dark:border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:shadow-md rounded-md">
            {
              <div className={`grid grid-cols-18  gap-4   dark:bg-gray-800    ${customeGrid===true?"md:grid-cols-2":"grid-cols-18"} `}>
                {allProducts.length>=1? (
                  allProducts.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })
                ) : (
                  <p className="text-red-600 font-bold my-10">
                    no product found
                  </p>
                )}
              </div>
            }
            <div className="flex justify-center md:justify-end mt-6">
              <Pagination
                handelOnSelectPage={handelOnSelectPage}
                pageCount={pageCount}
              />
            </div>
            </div>
           

            
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default ProductPage;
