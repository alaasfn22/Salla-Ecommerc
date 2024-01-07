/* eslint-disable react/prop-types */
import ProductGallery from "./ProductGallery";
import ProductDetalisText from "./ProductDetalisText";
import LoadingSpinner from "../../helper/Spinner";

const ProductDetailsContainer = ({ product, brand, category ,isLoading }) => {
  if(isLoading){
    return <LoadingSpinner/>
  }

  
  return (
    <div className="flex items-center   justify-center flex-wrap lg:flex-nowrap gap-8 rounded-xl border bg-white p-4  dark:bg-gray-800 dark:border-gray-700">
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
      
    </div>
  );
};

export default ProductDetailsContainer;
