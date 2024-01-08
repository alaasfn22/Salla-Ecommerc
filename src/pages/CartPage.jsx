/* eslint-disable no-unused-vars */
import CartLoggedHooks from "../Hooks/cartLoggedHooks";
import CartCard from "../components/cart/CartCard";
import LoadingSpinner from "../helper/Spinner";
import cartImg from '../assets/Cart-PNG-Clipart.png'
import CartCheckout from "../components/cart/cartCheckout";

const CartPage = () => {
  const [cartNumbers, totalPrice, cartProducts,isLoading]=CartLoggedHooks()
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div
          className="lg:col-span-2 h-fit  grid gap-8  border  shadow-md rounded-lg border-b p-2 py-4  dark:border-gray-500 bg-white dark:bg-gray-800  ">
          {
          isLoading?(<LoadingSpinner/>):(
            cartProducts.length>0?cartProducts.map((product)=>{
              return <CartCard key={product._id} product={product} />
            }):(
              <div className="flex justify-center items-center my-4">
                <img
                  src={cartImg}
                  alt="logo"
                  loading="lazy"
                  width={ 300  }
                  className="object-contain"
                />
              </div>
            )
          )
          }
         
        </div>
        <div className="p-2 py-4  border  shadow-md rounded-lg border-b   dark:border-gray-500 bg-white dark:bg-gray-800 ">
        <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
