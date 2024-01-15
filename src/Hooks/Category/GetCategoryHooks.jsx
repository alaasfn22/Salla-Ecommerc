import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
} from "../../redux/slice/CategorySlice";

const GetCategoryHooks = () => {
  const dispatch = useDispatch();
  const limit=8
  
  const { category, isLoading } = useSelector((state) => state.category);
  useEffect(() => {
    const data={limit}
    dispatch(getCategories(data));
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
    const data = { limit: limit, page: page };
    dispatch(getCategories(data));
  };
  return [allcategory, pageCount, handelOnSelectPage, isLoading];
};

export default GetCategoryHooks;
