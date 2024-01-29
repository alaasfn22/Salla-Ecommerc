/* eslint-disable react/prop-types */
import LoadingSpinner from "../../helper/Spinner";
import CustomeButton from "../../utils/CustomeButton";
import ProductCard from "../products/ProductCard";

const ProductContainer = ({ isLoading, allProducts }) => {
  return (
    <div>

     <CustomeButton
        pathname="/products"
        title="All Products"
      />
      <div className="py-4  dark:bg-gray-800 dark:border-gray-700">
              {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid  grid-cols-18  gap-8  ">
            {allProducts ? (
              allProducts.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })
            ) : (
              <p>no product found</p>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductContainer;
