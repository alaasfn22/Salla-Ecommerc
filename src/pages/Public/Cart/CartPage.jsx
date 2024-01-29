/* eslint-disable no-unused-vars */

import {useDispatch, useSelector} from "react-redux";
import CartLoggedHooks from "../../../Hooks/Cart/cartLoggedHooks";
import {removeAll} from "../../../redux/slice/CartSlice";
import {useEffect} from "react";
import {CustomeToast, customeContainer} from "../../../utils/Toast";
import LoadingSpinner from "../../../helper/Spinner";
import CartCard from "../../../components/cart/CartCard";
import CartCheckout from "../../../components/cart/cartCheckout";
import cartImg from "../../../assets/preview.png";
import Landing from "../../../utils/Landing";

const CartPage = () => {
  const [cartNumbers, totalPrice, cartProducts, isLoading] = CartLoggedHooks();
  const dispatch = useDispatch();

  const hanelRmoveAll = async (e) => {
    e.preventDefault();
    await dispatch(removeAll());
  };
  const {cart} = useSelector((state) => state.cart);
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
    <>
      <Landing curentPAge="Cart Page" />
      <div className="container py-8">
        {customeContainer()}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 ">
          {cartProducts.length >= 1 ? (
            <>
              <div className="lg:col-span-2 h-fit grid gap-8     ">
                {cartProducts.length >= 1 &&
                  cartProducts.map((product) => {
                    return (
                      <>
                        <CartCard key={product._id} product={product} />
                      </>
                    );
                  })}
                {cartProducts.length >= 1 && (
                  <button
                    onClick={hanelRmoveAll}
                    className="bg-btn-color2 w-40 rounded-lg p-2 text-white  hover:bg-main-Color-2"
                  >
                    Remove All
                  </button>
                )}
              </div>
              <div className="p-2 py-4 h-fit  border  shadow-md rounded-lg border-b   dark:border-gray-500 bg-white dark:bg-gray-800 ">
                <CartCheckout totalPrice={totalPrice} />
              </div>
            </>
          ) : isLoading ? (
            <div className="col-span-3">
              {" "}
              <LoadingSpinner />
            </div>
          ) : (
            <div className="grid col-span-3 overflow-hidden">
              <div className="flex justify-center  flex-col   items-center ">
                <img
                  src={cartImg}
                  alt="logo"
                  loading="lazy"
                  width={500}
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
