import { useDispatch, useSelector } from "react-redux";
import { getBrnads } from "../../redux/slice/BrandSlice";
import { useEffect, useState } from "react";

const GetBrnadHooks = () => {
  const { brands, isLoading } = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  const limit=8
  useEffect(() => {
    const data={limit}
    dispatch(getBrnads(data));
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
    const data = { limit: limit, page: page };
    dispatch(getBrnads(data));
  };
  return [brands, pageCount, handelOnSelectPage, isLoading];
};

export default GetBrnadHooks;
