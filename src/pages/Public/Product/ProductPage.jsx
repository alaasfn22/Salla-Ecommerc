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

const ProductPage = () => {
  const limit=6
  const dispatch=useDispatch()
  const getFilters=async()=>{
    getStorageFilterProducts()
    await dispatch(getQueryAllPeoducts(`limit=${limit}&${catQuery}&${brandQuery}`));
  }
  useEffect(() => {
 getFilters()
  }, []);

    const {products,isLoading}=useSelector((state)=>state.product)
    console.log(isLoading)
    
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (products.paginationResult) {
        setPageCount(products.paginationResult.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [products]);

  const [allProducts,setAllProducts]=useState([])
  useEffect(() => {
    products?.data?setAllProducts(products.data):setAllProducts([])
  }, [products?.data]);

  const handelOnSelectPage = (page) => {
    getStorageFilterProducts()
    dispatch(getQueryAllPeoducts(`limit=${limit}&page=${page}&${catQuery}&${brandQuery}`));
  };
  let catQuery="",brandQuery=""
  const getStorageFilterProducts=()=>{
    if(sessionStorage.getItem("catSelected")!==null){
      catQuery=sessionStorage.getItem("catSelected")
    }
    if(sessionStorage.getItem("brandSelected")!==null){
      brandQuery=sessionStorage.getItem("brandSelected")
    }
  }

    const[customeGrid,setCustomeGrid]=useState(false)
    const selecteGrid=()=>{ 
        setCustomeGrid(true)
       }
       const removeGrid=()=>{
        setCustomeGrid(false)
       }
       const [showFilter,setShowFilter]=useState(false)
       const handelShowFilter=()=>{
        setShowFilter(!showFilter)
       }
      
       useEffect(() => {
        window.scrollTo(0, 0);
       }, [isLoading]);

  return (
    <section className="px-2 lg:container      dark:bg-gray-800 ">
      <div className=" py-4 lg:py-6 ">
        <div className="flex  mb-24 ">
          <SideBar getFilters={getFilters} handelShowFilter={handelShowFilter} showFilter={showFilter} />
          <div  className="grow w-full md:px-3 md:w-3/4 overflow-hidden   ">
            <HeaderFilter  handelShowFilter={handelShowFilter} selecteGrid={selecteGrid} removeGrid={removeGrid}/>
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
