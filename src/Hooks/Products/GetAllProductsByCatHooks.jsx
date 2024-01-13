/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { getAllProductByCategory } from "../../redux/slice/ProductSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const GetAllProductsByCatHooks = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("categoryId");
  let limit = 8;
  const dispatch = useDispatch();
  const data = { limit: limit, id: id };
  const getProduct = async () => {
    await dispatch(getAllProductByCategory(data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const { productByCat, isLoading, error } = useSelector(
    (state) => state.product
  );
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (productByCat?.paginationResult) {
        setPageCount(productByCat?.paginationResult?.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [productByCat]);

  const handelOnSelectPage = (page) => {
    const data = { limit: limit, id: id, page: page };
    dispatch(getAllProductByCategory(data));
  };
  return [productByCat, pageCount, handelOnSelectPage, isLoading, error];
};

export default GetAllProductsByCatHooks;
