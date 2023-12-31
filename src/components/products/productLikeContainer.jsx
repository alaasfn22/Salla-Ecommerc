/* eslint-disable react/prop-types */
import CustomeButton from "../../utils/CustomeButton";
import ProductCard from "./ProductCard";

const ProductLikeContainer = ({ likeProduct }) => {
  
  return (
    <div>
      <CustomeButton name="Like Products" />
        <div className="grid bg-white p-4 border-2 rounded-xl my-4   grid-cols-18   gap-8  ">
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
