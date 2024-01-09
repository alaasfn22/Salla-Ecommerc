/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  getProductById,
} from "../redux/slice/ProductSlice";
import { getSpecificCategory } from "../redux/slice/CategorySlice";
import { getSpecificBrand } from "../redux/slice/BrandSlice";

const ProductDetailsHooks = (id) => {
  const dispatch = useDispatch();
  const { specificProduct, isLoading, likeProducts } = useSelector(
    (state) => state.product
  );
  const { specificCategory } = useSelector((state) => state.category);
  const { specificBrand } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (specificProduct.data) {
      setProduct(specificProduct.data);
    }
  }, [specificProduct.data]);

  useEffect(() => {
    if (product.category) {
      dispatch(getSpecificCategory(product.category));
    }
    if (product.brand) {
      dispatch(getSpecificBrand(product.brand));
    }
    if (product.category) {
      dispatch(getProductByCategory(product.category));
    }
  }, [product.category,product.brand]);


  const [category, setCategory] = useState("");
  useEffect(() => {
    if (specificCategory.data) {
      setCategory(specificCategory.data);
    }
  }, [specificCategory.data]);

 

  const [brand, setBrand] = useState("");
  useEffect(() => {
    if (specificBrand.data) {
      setBrand(specificBrand.data);
    }
  }, [specificBrand.data]);

  const [likeProduct, setLikeProduct] = useState([]);
  useEffect(() => {
    if (likeProducts.data) {
      setLikeProduct(likeProducts.data);
    }
  }, [likeProducts.data]);

  return [product, isLoading, category, brand, likeProduct];
};

export default ProductDetailsHooks;
