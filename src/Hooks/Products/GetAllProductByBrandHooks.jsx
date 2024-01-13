/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAllProductBrandId } from "../../redux/slice/ProductSlice";
import { useState } from "react";
import { useEffect } from "react";

const GetAllProductByBrandHooks = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("brandId");
  let limit = 8;
  const dispatch = useDispatch();
  const data = { limit: limit, id: id };
  const getProduct = async () => {
    await dispatch(getAllProductBrandId(data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  const { productByBrand, isLoading, error } = useSelector(
    (state) => state.product
  );
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (productByBrand.paginationResult) {
        setPageCount(productByBrand?.paginationResult?.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [productByBrand]);

  const handelOnSelectPage = (page) => {
    const data = { limit: limit, id: id, page: page };
    dispatch(getAllProductBrandId(data));
  };
  return [productByBrand, isLoading, error, pageCount, handelOnSelectPage];
};

export default GetAllProductByBrandHooks;
