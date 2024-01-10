/* eslint-disable no-unused-vars */
import ProductDetailsHooks from "../Hooks/ProductDetailsHooks";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../helper/Spinner";
import { Suspense, lazy, useEffect } from "react";
const ProductDetailsContainer=lazy(()=>import("../components/products/ProductDetailsContainer"))

const ProductLikeContainer = lazy(() =>
  import("../components/products/productLikeContainer")
);

const ProductDetails = () => {
 
  const { id } = useParams();
  const [product, isLoading, category, brand, likeProduct] =
    ProductDetailsHooks(id);

  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [product]);

   
   
  return (
    <div className="container py-8">
       
        <Suspense fallback={<LoadingSpinner />}> 
        <ProductDetailsContainer product={product} category={category} brand={brand} isLoading={isLoading} />
        </Suspense>
       
     {
      likeProduct&& <Suspense fallback={<LoadingSpinner />}>
      <ProductLikeContainer likeProduct={likeProduct} isLoading={isLoading} />
    </Suspense>
     }
    </div>
  );
};

export default ProductDetails;
