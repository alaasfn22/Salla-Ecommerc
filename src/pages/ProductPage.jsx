/* eslint-disable no-unused-vars */
import ProductCard from "../components/products/ProductCard";
import LoadingSpinner from "../helper/Spinner";
import CustomePagination from "../utils/Pagination";
import GetProductPageHook from "../Hooks/GetProductPageHook";

const ProductPage = () => {
  const [allProducts, pageCount, handelOnSelectPage, isLoading, error] =
    GetProductPageHook();

  return (
    <div className="container text-center py-8 ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-18 py-4 gap-8 bg-main-Color p-4 rounded-xl  ">
          {allProducts ? (
            allProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          ) : (
            <p className="text-red-600 font-bold my-10">no product found</p>
          )}
        </div>
      )}

      <CustomePagination
        handelOnSelectPage={handelOnSelectPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default ProductPage;
