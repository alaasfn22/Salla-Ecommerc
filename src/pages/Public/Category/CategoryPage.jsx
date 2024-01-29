import { useState } from "react";
import CatCard from "../../../components/category/catCard";
import LoadingSpinner from "../../../helper/Spinner";
import GetCategoryHooks from "../../../Hooks/Category/GetCategoryHooks";
import { Pagination } from "flowbite-react";
import Landing from "../../../utils/Landing";

const CategoryPage = () => {
  const [allcategory, pageCount, handelOnSelectPage, isLoading] =
    GetCategoryHooks();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
    handelOnSelectPage(page);
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
     <Landing curentPAge="Categories Page"/>
    <div className="container py-8 ">
      <div className="grid grid-cols-16 py-4 l gap-4 dark:bg-gray-800 ">
        {allcategory ? (
          allcategory.map((category) => {
            return (
              <CatCard
                key={category._id}
                name={category.name}
                image={category.image}
                id={category._id}
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
    </>
  );
};

export default CategoryPage;
