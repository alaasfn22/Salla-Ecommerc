import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/products/ProductCard";
import LoadingSpinner from "../../helper/Spinner";
import CustomePagination from "../../utils/Pagination";
import { getAllProductByCategory } from "../../redux/slice/ProductSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ProductByCategory = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("categoryId");
  let limit = 8;
  const dispatch = useDispatch();
  const data = { limit: limit, id: id };
  const getProduct = async () => {
    await dispatch(getAllProductByCategory(data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const { productByCategory, isLoading, error } = useSelector(
    (state) => state.product
  );
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (productByCategory?.paginationResult) {
        setPageCount(productByCategory?.paginationResult?.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [productByCategory]);

  const handelOnSelectPage = (page) => {
    const data = { limit: limit, id: id, page: page };
    dispatch(getAllProductByCategory(data));
  };
  console.log(productByCategory?.data?.length)
  console.log(error)
  return (
    <div className="container text-center py-8 ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        error?(
          <p className="text-red-600 font-bold my-10">{error?.data?.message}</p>
        ):(
          <div className="grid grid-cols-18 py-4 gap-8   rounded-xl  dark:bg-gray-800 dark:border-gray-700  ">
          {productByCategory?.data?.length ? (
            productByCategory.data.map((product) => {
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
  );
};

export default ProductByCategory;
