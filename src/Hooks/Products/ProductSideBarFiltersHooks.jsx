import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slice/CategorySlice";
import { getBrnads } from "../../redux/slice/BrandSlice";

const ProductSideBarFiltersHooks = (getFilters) => {
  const [catlimit, setCatLimit] = useState(4);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  useEffect(() => {
    const data = { limit: catlimit };
    dispatch(getCategories(data));
  }, [catlimit]);

  const [allcategory, setAllCategory] = useState([]);
  useEffect(() => {
    if (category.data) {
      setAllCategory(category.data);
    }
  }, [category.data]);

  const onClickViewMoreCat = () => {
    setCatLimit(catlimit + 4);
  };

  const { brands } = useSelector((state) => state.brand);
  const [brandLimit, setBrandLimit] = useState(4);
  useEffect(() => {
    const data = { limit: brandLimit };
    dispatch(getBrnads(data));
  }, [brandLimit]);
  const [allBrands, setAllBrands] = useState([]);
  useEffect(() => {
    if (brands.data) {
      setAllBrands(brands.data);
    }
  }, [brands.data]);

  const onClickViewMoreBrand = () => {
    setBrandLimit(brandLimit + 4);
  };
  const [catSelected, setCatSelected] = useState([]);
  const handelCatSelecte = (e) => {
    const id = e.target.id;
      if (id === "0") {
        setCatSelected([]);
      }else if(id !=="0"){
        if(e.target.checked===true){
          setCatSelected([...catSelected, id]);
        }else{
          setCatSelected(catSelected.filter((item) => item !== id));
        }
      }      
  };
  
  let queryCat = "";

  useEffect(() => {
    queryCat = catSelected.map((value) => "category[in][]=" + value).join("&");
    window.sessionStorage.setItem("catSelected", queryCat);
    setTimeout(() => {
      getFilters();
    }, 1000);
  }, [catSelected]);

  const [brandSelected, setBrandSelected] = useState([]);
  const handelBrandSelecte = (e) => {
    const id = e.target.id;
    if (e.target.checked === true) {
      if (id === "00") {
        setBrandSelected([]);
      } else if (id !== "00") {
        setBrandSelected([...brandSelected, id]);
      }
    } else {
      setBrandSelected(brandSelected.filter((item) => item !== id));
    }
  };
  let queryBrand = "";

  useEffect(() => {
    queryBrand = brandSelected.map((value) => "brand[in][]=" + value).join("&");
    window.sessionStorage.setItem("brandSelected", queryBrand);
    setTimeout(() => {
      getFilters();
    }, 1000);
  }, [brandSelected]);
  return [
    catSelected,
    handelCatSelecte,
    brandSelected,
    handelBrandSelecte,
    catlimit,
    onClickViewMoreCat,
    allcategory,
    onClickViewMoreBrand,
    allBrands,
    brandLimit,
  ];
};

export default ProductSideBarFiltersHooks;
