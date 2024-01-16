import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQueryAllPeoducts } from "../../redux/slice/ProductSlice";

const GetProductPageHook = () => {
  const limit = 6;
  const dispatch = useDispatch();
  const getFilters = async () => {
    getStorageFilterProducts();
    getSortStorageFilter();
    await dispatch(
      getQueryAllPeoducts(
        `sort=${sort}&limit=${limit}&${catQuery}&${brandQuery}`
      )
    );
  };
  useEffect(() => {
    getFilters();
  }, []);

  const { products, isLoading, error } = useSelector((state) => state.product);

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

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    products?.data ? setAllProducts(products.data) : setAllProducts([]);
  }, [products?.data]);

  const handelOnSelectPage = (page) => {
    getStorageFilterProducts();
    dispatch(
      getQueryAllPeoducts(
        `sort=${sort}&limit=${limit}&page=${page}&${catQuery}&${brandQuery}`
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

  let sortType = "",
    sort = "";
  const getSortStorageFilter = () => {
    if (sessionStorage.getItem("sort") !== null) {
      sortType = sessionStorage.getItem("sort");
    } else {
      sortType = "";
    }
    if (sortType === "Out of order") {
      sort = "";
    }
    if (sortType === "Price From lowest to highest") {
      sort = "+price";
    }
    if (sortType === "Price From highest to lowest") {
      sort = "-price";
    }
    if (sortType === "Highest rated") {
      sort = "-ratingsQuantity";
    }
    if (sortType === "best seller") {
      sort = "-sold";
    }
    if (sortType === "quantity") {
      sort = "-quantity";
    }
   
  };

  const [customeGrid, setCustomeGrid] = useState(false);
  const selecteGrid = () => {
    setCustomeGrid(true);
  };
  const removeGrid = () => {
    setCustomeGrid(false);
  };
  const [showFilter, setShowFilter] = useState(false);
  const handelShowFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return [
    allProducts,
    pageCount,
    handelOnSelectPage,
    isLoading,
    error,
    customeGrid,
    selecteGrid,
    removeGrid,
    showFilter,
    handelShowFilter,
    getFilters,
    setShowFilter,
  ];
};

export default GetProductPageHook;
