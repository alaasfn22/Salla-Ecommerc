import ProductCard from "../../../components/products/ProductCard";
import LoadingSpinner from "../../../helper/Spinner";
import CustomePagination from "../../../utils/Pagination";
import GetAllProductsByCatHooks from "../../../Hooks/Products/GetAllProductsByCatHooks";

const ProductByCategory = () => {
  const [productByCat, pageCount, handelOnSelectPage, isLoading, error] =
    GetAllProductsByCatHooks();

  return (
    <div className="container text-center py-8 ">
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-600 mx-auto font-bold my-10">
          {error?.data?.message}
        </p>
      ) : (
        <div className="grid grid-cols-18 py-4 gap-8   rounded-xl  dark:bg-gray-800 dark:border-gray-700  ">
          {productByCat?.data?.length ? (
            productByCat.data.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })
          ) : (
            <p className="text-red-600 mx-auto font-bold my-10">
              empty products
            </p>
          )}
        </div>
      )}

      {pageCount > 1 && (
        <CustomePagination
          handelOnSelectPage={handelOnSelectPage}
          pageCount={pageCount}
        />
      )}
    </div>
  );
};

export default ProductByCategory;
