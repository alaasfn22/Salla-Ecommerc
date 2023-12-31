import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slice/ProductSlice";
import { getCategories } from "../redux/slice/CategorySlice";
import { getBrnads } from "../redux/slice/BrandSlice";

const HomeHooks = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);
  const [allProducts, setAllProducts] = useState([]);
  const { category } = useSelector((state) => state.category);
  const [allCategory, setAllCategory] = useState([]);

  const catLoading = useSelector((state) => state.category.isLoading);
  const { brands } = useSelector((state) => state.brand);
  const brandLoading = useSelector((state) => state.brand.isLoading);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories(10));
    dispatch(getBrnads(10));
  }, []);
  useEffect(() => {
    if (products.data) {
      setAllProducts(products);
    }
  }, [products]);

  useEffect(() => {
    if (category.data) {
      setAllCategory(category.data);
    }
  }, [category]);
  return [
    allProducts,
    allCategory,
    catLoading,
    brandLoading,
    brands,
    isLoading,
    error,
  ];
};

export default HomeHooks;
