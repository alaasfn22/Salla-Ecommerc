import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../../redux/slice/CartSlice";

const CartUpdateCountHooks = (product) => {
  const [count, setCount] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    product?.count ? setCount(product?.count) : setCount(1);
  }, [product?.count]);
  const handelSelecteValue = async (e) => {
    e.preventDefault();
    setCount(e.target.value);
    const data = { id: product._id, count: e.target.value };
    setTimeout(() => {
      dispatch(updateCartCount(data));
    }, 2000);
  };

  return [handelSelecteValue, count];
};

export default CartUpdateCountHooks;
