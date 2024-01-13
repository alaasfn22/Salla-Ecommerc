import { useState } from "react";
import LoadingSpinner from "../../../helper/Spinner";
import BrandCard from "../../../components/brand/BrandCard";
import GetBrnadHooks from "../../../Hooks/Brand/GetBrnadHooks";
import { Pagination } from "flowbite-react";

const BrandPage = () => {
  const [brands, pageCount, handelOnSelectPage, isLoading] = GetBrnadHooks();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
    handelOnSelectPage(page);
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container py-8 ">
      <div className="grid grid-cols-16 gap-4 py-4 dark:bg-gray-800 ">
        {brands.data ? (
          brands.data.map((brand) => {
            return (
              <BrandCard
                key={brand._id}
                id={brand._id}
                name={brand.name}
                image={brand.image}
              />
            );
          })
        ) : (
          <p>no product found</p>
        )}
      </div>

      <div className="flex justify-center items-center py-8">
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={pageCount}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
