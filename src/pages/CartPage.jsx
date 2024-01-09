/* eslint-disable no-unused-vars */
import CartLoggedHooks from "../Hooks/cartLoggedHooks";
import CartCard from "../components/cart/CartCard";
import LoadingSpinner from "../helper/Spinner";
import cartImg from "../assets/Cart-PNG-Clipart.png";
import CartCheckout from "../components/cart/cartCheckout";
import RemoveCartHooks from "../Hooks/RemoveSpecificCartHooks";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../redux/slice/CartSlice";
import { useEffect } from "react";
import { CustomeToast, customeContainer } from "../utils/Toast";

const CartPage = () => {
  const [cartNumbers, totalPrice, cartProducts, isLoading] = CartLoggedHooks();
  const dispatch = useDispatch();

  const hanelRmoveAll = async (e) => {
    e.preventDefault();
    await dispatch(removeAll());
  };
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    if (isLoading === false) {
      if (cart.status === 204) {
        if (cart?.data === "") {
          CustomeToast("success", "Remove All Done");
        }
      }
    }
  }, [isLoading]);

  return (
    <div className="container py-8">
      {customeContainer()}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="lg:col-span-2 h-fit  grid gap-8  border  shadow-md rounded-lg border-b p-2 py-4  dark:border-gray-500 bg-white dark:bg-gray-800  ">
          {isLoading ? (
            <LoadingSpinner />
          ) : cartProducts.length > 0 ? (
            cartProducts.map((product) => {
              return <CartCard key={product._id} product={product} />;
            })
          ) : (
            <div className="flex justify-center items-center my-4">
              <img
                src={cartImg}
                alt="logo"
                loading="lazy"
                width={300}
                className="object-contain"
              />
            </div>
          )}
      {
        cartProducts.length >0 && (
          <button
          onClick={hanelRmoveAll}
          className="bg-sky-500 w-40 rounded-lg p-2 text-white  hover:bg-sky-700 ..."
        >
          Remove All
        </button>
        )
      }
        </div>
        <div className="p-2 py-4  border  shadow-md rounded-lg border-b   dark:border-gray-500 bg-white dark:bg-gray-800 ">
          <CartCheckout totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
