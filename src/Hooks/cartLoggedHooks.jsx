import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoggedToCart } from "../redux/slice/CartSlice";

const CartLoggedHooks = () => {
  const dispatch = useDispatch();
  const [cartNumbers, setCartNumbers] = useState("0");
  const [totalPrice, setTotlePrice] = useState("0");
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllLoggedToCart());
    };
    get();
  }, []);
  const { loggedCart, isLoading } = useSelector((state) => state.cart);
  useEffect(() => {
    if (isLoading === false) {
      if (loggedCart.status === 200) {
        if (loggedCart?.data?.numOfCartItems) {
          setCartNumbers(loggedCart?.data?.numOfCartItems);
          setTotlePrice(loggedCart?.data?.data?.totalPrice);
          setCartProducts(loggedCart?.data?.data?.products);
        }
      } else {
        setCartNumbers("0");
        setTotlePrice("0");
        setCartProducts([]);
      }
    }
  }, [isLoading]);

  return [cartNumbers, totalPrice, cartProducts,isLoading];
};

export default CartLoggedHooks;
