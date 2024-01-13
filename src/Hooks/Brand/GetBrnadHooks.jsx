import { useDispatch, useSelector } from "react-redux";
import { getBrnads, getBrnadsPagination } from "../../redux/slice/BrandSlice";
import { useEffect, useState } from "react";

const GetBrnadHooks = () => {
  const { brands, isLoading } = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrnads());
  }, []);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (brands.paginationResult) {
        setPageCount(brands.paginationResult.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [brands]);

  const handelOnSelectPage = (page) => {
    dispatch(getBrnadsPagination(page));
  };
  return [brands, pageCount, handelOnSelectPage, isLoading];
};

export default GetBrnadHooks;
