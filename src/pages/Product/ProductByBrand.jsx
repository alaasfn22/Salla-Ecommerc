import LoadingSpinner from '../../helper/Spinner';
import ProductCard from '../../components/products/ProductCard';
import CustomePagination from '../../utils/Pagination';
import GetProductPageHook from '../../Hooks/GetProductPageHook';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProductBrandId } from '../../redux/slice/ProductSlice';

const ProductByBrand = () => {
    let [searchParams, setSearchParams] = useSearchParams();
  const id=searchParams.get("brandId")
let limit=8;
    const dispatch=useDispatch()
    const data={limit:limit,id:id}
    const getProduct=async()=>{       
        await dispatch(getAllProductBrandId(data))
    }
    useEffect(() => {
        getProduct()   
     }, []);
    const {productByBrand,isLoading,error}=useSelector((state)=>state.product)
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
      try {
        if (productByBrand.paginationResult) {
          setPageCount(productByBrand?.paginationResult?.numberOfPages);
        }
      } catch (e) {
        console.log(e);
      }
    }, [productByBrand]);
console.log(error)
console.log(isLoading)
    const handelOnSelectPage = (page) => {
        const data={limit:limit,id:id,page:page}
        dispatch(getAllProductBrandId(data));
      };
  return (
    <div className="container text-center py-8 ">
    {isLoading ? (
      <LoadingSpinner />
    ) : (
      error?(
        <p className="text-red-600 font-bold my-10">{error?.data?.message}</p>
      ):(
        <div className="grid grid-cols-18 py-4 gap-8   rounded-xl  dark:bg-gray-800 dark:border-gray-700  ">
        {productByBrand?.data?.length ? (
          productByBrand.data.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })
        ) : (
          <p className="text-red-600 mx-auto font-bold my-10">
            no product found
          </p>
        )}
      </div>
      )
    )}

   {
    pageCount>1&& <CustomePagination
    handelOnSelectPage={handelOnSelectPage}
    pageCount={pageCount}
  />
   }
  </div>
  )
}

export default ProductByBrand