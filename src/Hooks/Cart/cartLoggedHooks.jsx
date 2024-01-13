import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoggedToCart } from "../../redux/slice/CartSlice";

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

  const { cart, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isLoading === false) {
      if (cart.status === 200) {
        if (cart?.data?.numOfCartItems) {
          setCartNumbers(cart?.data?.numOfCartItems);
          setTotlePrice(cart?.data?.data?.totalCartPrice);
          setCartProducts(cart?.data?.data?.products);
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
