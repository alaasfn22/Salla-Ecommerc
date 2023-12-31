import ProductDetailsHooks from "../Hooks/ProductDetailsHooks";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../helper/Spinner";
import { Suspense, lazy } from "react";
import ProductDetailsContainer from "../components/products/ProductDetailsContainer";

const ProductLikeContainer = lazy(() =>
  import("../components/products/productLikeContainer")
);

const ProductDetails = () => {
  const { id } = useParams();
  const [product, isLoading, category, brand, likeProduct] =
    ProductDetailsHooks(id);
  return (
    <div className="container py-8">
        <ProductDetailsContainer
          product={product}
          isLoading={isLoading}
          brand={brand}
          category={category}
        />
      <Suspense fallback={<LoadingSpinner />}>
        <ProductLikeContainer likeProduct={likeProduct} isLoading={isLoading} />
      </Suspense>
    </div>
  );
};

export default ProductDetails;
