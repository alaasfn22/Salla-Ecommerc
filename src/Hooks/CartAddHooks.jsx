import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../redux/slice/CartSlice";
import { CustomeToast } from "../utils/Toast";
import { useEffect, useState } from "react";

const CartAddHooks = (product) => {
  const dispatch = useDispatch();
  const [colorCheck, setColorCheck] = useState("");
  const [color, setColor] = useState("");

  const handelSelectColor = (colorIndex, color) => {
    setColor(color);
    setColorCheck(colorIndex);
  };

  const addToCart = async (e) => {
    e.preventDefault();
    if (product.availableColors.length >= 1) {
      if (color === "") {
        CustomeToast("error", "please select color");
        return;
      } else {
        setColor("");
      }
    }
    const data = { productId: product._id, color: color };
    await dispatch(addtoCart(data));
  };

  const { cart, isLoading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isLoading === false) {
      if (cart?.status === 200) {
        if (cart?.data?.status === "success") {
          CustomeToast("success", cart?.data?.message);
        }
      } else if (error === "Request failed with status code 500") {
        CustomeToast("error", "Please log in first");
      }
    }
  }, [isLoading]);
  return [addToCart, handelSelectColor, colorCheck];
};

export default CartAddHooks;
