/* eslint-disable react/prop-types */

import RemoveSpecificCartHooks from "../../Hooks/Cart/RemoveSpecificCartHooks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CartUpdateCountHooks from "../../Hooks/Cart/CartUpdateCountHooks";

const CartCard = ({ product }) => {
const [handelSelecteValue, count]=CartUpdateCountHooks(product)
  const [handelDeletItem] = RemoveSpecificCartHooks(product);


  return (
 
    <div className="md:flex capitalize px-6 items-strech overflow-hidden py-8 md:py-10 lg:py-8 border  shadow-md rounded-lg bg-white dark:bg-gray-900  dark:border-gray-500 border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full border-2 border-gray-200 dark:bg-gray-300 flex justify-center items-center rounded-xl   overflow-hidden">
        <LazyLoadImage
          src={
            "https://salaa-kxfx.onrender.com/products/" +
            product?.product?.imageCover
          }
          loading="lazy"
          alt={product?.product?.title}
          title={product?.product?.title}
          className="h-40 w-full object-center   object-contain p-2  md:block hidden"
        />
        <LazyLoadImage
           src={
            "https://salaa-kxfx.onrender.com/products/" +
            product?.product?.imageCover
          }
          loading="lazy"
          alt={product?.product?.title}
          title={product?.product?.title}
          className="md:hidden w-full h-56 object-center p-2 object-contain"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        
        <div className="flex  justify-between w-full ">
          <p className="text-base font-black  leading-none text-gray-800 dark:text-white">
          {product?.product?.title}
          </p>
          <input
          type="number"
            value={count}
            onChange={handelSelecteValue}
            min={1}       
           className=" w-16 rounded-sm  px-1 border border-gray-200  focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >            
          </input>
          
        </div>
        <p className="text-sm leading-3 text-gray-600 dark:text-white ">
          Category: {product?.product?.category?.name}
        </p>
        <p className="text-sm leading-3 text-gray-600 dark:text-white py-4">
         Brand: {product?.product?.brand?.name}
        </p>
        <p className="w-96 flex items-center text-sm leading-3 text-gray-600 dark:text-white">
        <span>Color:</span> <span
            style={{ backgroundColor: `${product?.color}` }}
            className="inline-block ml-4   w-4 h-4 cursor-pointer rounded-full border dark:bg-gray-700 "
          ></span>
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex ">
           
            <p onClick={handelDeletItem} className="text-sm leading-3 underline text-red-500  cursor-pointer">
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800 dark:text-white">
          ${product?.price * count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
