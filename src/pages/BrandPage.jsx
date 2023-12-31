import CustomePagination from "../utils/Pagination";
import BrandCard from "../components/brand/BrandCard";
import LoadingSpinner from "../helper/Spinner";
import GetBrnadHooks from "../Hooks/GetBrnadHooks";
const BrandPage = () => {
  const [brands, pageCount, handelOnSelectPage, isLoading] = GetBrnadHooks();
  return (
    <div className="container my-8 ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-16 gap-4 p-4 bg-main-Color rounded-xl  ">
          {brands.data ? (
            brands.data.map((brand) => {
              return (
                <BrandCard
                  key={brand.id}
                  name={brand.name}
                  image={brand.image}
                />
              );
            })
          ) : (
            <p>no product found</p>
          )}
        </div>
      )}
      <CustomePagination
        handelOnSelectPage={handelOnSelectPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default BrandPage;
