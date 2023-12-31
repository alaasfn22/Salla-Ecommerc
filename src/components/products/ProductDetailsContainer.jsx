/* eslint-disable react/prop-types */
import ProductGallery from "./ProductGallery";
import ProductDetalisText from "./ProductDetalisText";
import LoadingSpinner from "../../helper/Spinner";

const ProductDetailsContainer = ({ product, isLoading, brand, category }) => {
  return (
    <div className="flex items-center   justify-center flex-wrap lg:flex-nowrap gap-8 rounded-xl bg-main-Color p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="w-full lg:w-1/2">
            <ProductGallery product={product}  />
          </div>
          <div className=" w-full lg:w-1/2">
            <ProductDetalisText
              product={product}
              brand={brand}
              category={category}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailsContainer;
