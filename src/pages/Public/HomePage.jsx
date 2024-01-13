import { Suspense, lazy } from "react";
import HomeHooks from "../../Hooks/Home/HomeHooks";
import LoadingSpinner from "../../helper/Spinner";
const Categorycontainer = lazy(() =>
  import("../../components/home/Categorycontainer")
);
const BrandContainer = lazy(() => import("../../components/home/BrandContainer"));
const ProductContainer = lazy(() =>
  import("../../components/home/ProductContainer")
);
const Gallery = lazy(() => import("../../components/home/Gallery"));

const HomePage = () => {
  const [
    allProducts,
    allCategory,
    catLoading,
    brandLoading,
    brands,
    isLoading,
    // eslint-disable-next-line no-unused-vars
    error,
  ] = HomeHooks();

  return (
    <div className="container ">
      <Suspense fallback={<LoadingSpinner />}>
        <Gallery />
      </Suspense>
      <div className="py-4">
        <Suspense fallback={<LoadingSpinner />}>
          <Categorycontainer catLoading={catLoading} category={allCategory} />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductContainer
            isLoading={isLoading}
            allProducts={allProducts.data}
          />
        </Suspense>
      </div>
      

      <div className="py-4">
        <Suspense fallback={<LoadingSpinner />}>
          <BrandContainer brandLoading={brandLoading} brands={brands} />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;

// eslint-disable-next-line react-refresh/only-export-components
