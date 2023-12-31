/* eslint-disable react/prop-types */
import LoadingSpinner from "../../helper/Spinner";
import CustomeButton from "../../utils/CustomeButton";
import ProductCard from "../products/ProductCard";

const ProductContainer = ({ isLoading, allProducts }) => {
  return (
    <div>
      <CustomeButton
        name="Products"
        pathname="/products"
        title="All Products"
      />
      <div className="p-4 rounded-xl bg-main-Color">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid  grid-cols-18  py-4 gap-8  ">
            {allProducts ? (
              allProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
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
