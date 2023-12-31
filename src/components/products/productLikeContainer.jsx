/* eslint-disable react/prop-types */
import CustomeButton from "../../utils/CustomeButton";
import ProductCard from "./ProductCard";

const ProductLikeContainer = ({ likeProduct }) => {
  return (
    <div>
      <CustomeButton name="Products" />
      <div className="grid bg-main-Color p-4 rounded-xl my-8   grid-cols-18   gap-8  ">
        {likeProduct ? (
          likeProduct.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <p>no product found</p>
        )}
      </div>
    </div>
  );
};

export default ProductLikeContainer;
