import LoadingSpinner from "../../helper/Spinner";
import CustomeButton from "../../utils/CustomeButton";
import { getProductsHighPrice } from "../../redux/slice/ProductSlice";
import ProductCard from "../products/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductHighPriceContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsHighPrice());
  }, []);
  const { products, isLoading } = useSelector((state) => state.product);
  console.log(products)
  return (
    <div>
      <CustomeButton
        name="Products"
        pathname="/products"
        title="All Products"
      />
      <div className="p-4 rounded-xl border-2 bg-white">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid  grid-cols-18  gap-8  ">
            {products.data ? (
              products.data.map((product) => {
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

export default ProductHighPriceContainer;
