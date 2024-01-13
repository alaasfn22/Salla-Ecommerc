import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsPagination,
} from "../../redux/slice/ProductSlice";

const GetProductPageHook = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { products, isLoading, error } = useSelector((state) => state.product);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (products.data) {
      setAllProducts(products.data);
    }
  }, [products]);

  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    try {
      if (products.paginationResult) {
        setPageCount(products.paginationResult.numberOfPages);
      }
    } catch (e) {
      console.log(e);
    }
  }, [products]);

  const handelOnSelectPage = (page) => {
    dispatch(getProductsPagination(page));
  };
  return [allProducts, pageCount, handelOnSelectPage, isLoading, error];
};

export default GetProductPageHook;
