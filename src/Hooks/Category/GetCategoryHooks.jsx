import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getCategoryPagination,
} from "../../redux/slice/CategorySlice";

const GetCategoryHooks = () => {
  const dispatch = useDispatch();
  const { category, isLoading } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const [allcategory,setAllCategory]=useState([])
  useEffect(() => {
    if (category.data) {
      setAllCategory(category.data);
    }
  }, [category.data]);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (category.paginationResult) {
        setPageCount(category.paginationResult.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [category]);

  const handelOnSelectPage = (page) => {
    dispatch(getCategoryPagination(page));
  };
  return [allcategory, pageCount, handelOnSelectPage, isLoading];
};

export default GetCategoryHooks;
