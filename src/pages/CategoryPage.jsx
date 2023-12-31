import CatCard from "../components/category/catCard";
import LoadingSpinner from "../helper/Spinner";
import CustomePagination from "../utils/Pagination";
import GetCategoryHooks from "../Hooks/GetCategoryHooks";

const CategoryPage = () => {
  const [category, pageCount, handelOnSelectPage, isLoading] =
    GetCategoryHooks();
  console.log(category);
  return (
    <div className="container my-8 ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-16 bg-main-Color p-4 rounded-xl gap-4  ">
          {category.data ? (
            category.data.map((category) => {
              return (
                <CatCard
                  key={category.id}
                  name={category.name}
                  image={category.image}
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

export default CategoryPage;
