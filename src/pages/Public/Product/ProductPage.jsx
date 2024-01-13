/* eslint-disable no-unused-vars */
import ProductCard from "../../../components/products/ProductCard";
import LoadingSpinner from "../../../helper/Spinner";
import CustomePagination from "../../../utils/Pagination";
import GetProductPageHook from "../../../Hooks/Products/GetProductPageHook";
import SideBar from "../../../components/products/sideBar";
import HeaderFilter from "../../../components/products/HeaderFilter";
import { useState } from "react";

const ProductPage = () => {
  const [allProducts, pageCount, handelOnSelectPage, isLoading, error] =
    GetProductPageHook();
    const[customeGrid,setCustomeGrid]=useState(false)
    const selecteGrid=()=>{ 
        setCustomeGrid(true)
       }
       const removeGrid=()=>{
        setCustomeGrid(false)
       }

  return (
    <section className="container  dark:bg-gray-800 ">
      <div className=" py-4 lg:py-6 ">
        <div className="flex flex-wrap mb-24 -mx-3">
          <SideBar />
          <div className="w-full px-3 md:w-3/4">
            <HeaderFilter selecteGrid={selecteGrid} removeGrid={removeGrid}/>
            <div className="p-4 dark:border border-gray-200 dark:border-gray-900 dark:bg-gray-800 dark:shadow-md rounded-md">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className={`grid grid-cols-18  gap-8   dark:bg-gray-800    ${customeGrid===true?"grid-cols-2":"grid-cols-18"} `}>
                {allProducts ? (
                  allProducts.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })
                ) : (
                  <p className="text-red-600 font-bold my-10">
                    no product found
                  </p>
                )}
              </div>
            )}
            <div className="flex justify-center md:justify-end mt-6">
              <CustomePagination
                handelOnSelectPage={handelOnSelectPage}
                pageCount={pageCount}
              />
            </div>
            </div>
           

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
