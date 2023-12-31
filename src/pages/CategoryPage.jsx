import CatCard from "../components/category/catCard";
import LoadingSpinner from "../helper/Spinner";
import CustomePagination from "../utils/Pagination";
import GetCategoryHooks from "../Hooks/GetCategoryHooks";

const CategoryPage = () => {
  const [category, pageCount, handelOnSelectPage, isLoading] =
    GetCategoryHooks();
    if(isLoading){
      return <LoadingSpinner/>
    }
  return (
    <div className="container py-8 ">
      
        <div className="grid grid-cols-16 bg-white border-2  p-4 rounded-xl gap-4  ">
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
      
      <CustomePagination
        handelOnSelectPage={handelOnSelectPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default CategoryPage;
