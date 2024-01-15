import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQueryAllPeoducts } from "../../redux/slice/ProductSlice";

const GetProductPageHook = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const limit = 6;
  const getFilters = async () => {
    getStorageFilterProducts();
    await dispatch(
      getQueryAllPeoducts(`limit=${limit}&${catQuery}&${brandQuery}`)
    );
  };
  useEffect(() => {
    getFilters();
  }, []);

  const { products, isLoading, error } = useSelector((state) => state.product);
  useEffect(() => {
    if (products.data) {
      setAllProducts(products?.data);
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
    getStorageFilterProducts();
    dispatch(
      getQueryAllPeoducts(
        `limit=${limit}&page=${page}&${catQuery}&${brandQuery}`
      )
    );
  };
  let catQuery = "",
    brandQuery = "";
  const getStorageFilterProducts = () => {
    if (sessionStorage.getItem("catSelected") !== null) {
      catQuery = sessionStorage.getItem("catSelected");
    }
    if (sessionStorage.getItem("brandSelected") !== null) {
      brandQuery = sessionStorage.getItem("brandSelected");
    }
  };
  return [allProducts, pageCount, handelOnSelectPage, isLoading, error];
};

export default GetProductPageHook;
