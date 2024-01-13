/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  getProductById,
} from "../../redux/slice/ProductSlice";
import { getSpecificCategory } from "../../redux/slice/CategorySlice";
import { getSpecificBrand } from "../../redux/slice/BrandSlice";

const ProductDetailsHooks = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);
  const { specificProduct, isLoading, likeProducts } = useSelector((state) => state.product);
  const { specificCategory } = useSelector((state) => state.category);
  const { specificBrand } = useSelector((state) => state.brand);
  
  let product=[]
  try{
    specificProduct.data?product=specificProduct.data:product=[]
  }catch(e){
    console.log(e)
  }

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

  let category=[]
  try{
    specificCategory.data?category=specificCategory.data:category=[]
  }
  catch(e){
    console.log(e)
  }

  let brand=[]
  try{
    specificBrand.data?brand=specificBrand.data:brand=[]  
  }
  catch(e){
    console.log(e)
  }

  // let likeProduct=[]
  // try{
  //   likeProducts.data?likeProduct=likeProducts.data:likeProduct=[]
  // }
  // catch(e){
  //   console.log(e)
  // }
  const[likeProduct,setLikeProduct]=useState([])
  useEffect(()=>{
    likeProducts.data?setLikeProduct(likeProducts.data):setLikeProduct([])
  },[product.category,likeProducts.data])
  
  return [product, isLoading, category, brand, likeProduct];
};

export default ProductDetailsHooks;
