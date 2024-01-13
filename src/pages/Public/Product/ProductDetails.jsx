/* eslint-disable no-unused-vars */

import { useSearchParams } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ProductDetailsHooks from "../../../Hooks/Products/ProductDetailsHooks";
import LoadingSpinner from "../../../helper/Spinner";
import ProductDetailsContainer from "../../../components/products/ProductDetailsContainer";
import ProductLikeContainer from '../../../components/products/productLikeContainer'

const ProductDetails = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("productId");
  const [product, isLoading, category, brand, likeProduct] =
    ProductDetailsHooks(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className="container py-8">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductDetailsContainer
          product={product}
          isLoading={isLoading}
          category={category}
          brand={brand}
        />
      )}
      {likeProduct && isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductLikeContainer likeProduct={likeProduct} isLoading={isLoading} />
      )}
    </div>
  );
};

export default ProductDetails;
