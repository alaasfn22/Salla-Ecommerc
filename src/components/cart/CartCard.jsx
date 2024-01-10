/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { customeContainer } from "../../utils/Toast";
import RemoveSpecificCartHooks from "../../Hooks/RemoveSpecificCartHooks";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../../redux/slice/CartSlice";

const CartCard = ({ product }) => {
  const [count, setCount] = useState(null);
 
  useEffect(() => {
    product?.count ? setCount(product?.count) : setCount(1);
  }, [product?.count]);
  const handelSelecteValue=async(e)=>{
    e.preventDefault()
    setCount(e.target.value)
    const data = { id: product._id, count: e.target.value };
     setTimeout(()=>{
      dispatch(updateCartCount(data));
     },1000)
    
  }  

  const [handelDeletItem] = RemoveSpecificCartHooks(product);
  const dispatch = useDispatch();
  const handelUpdatecount = async (e) => {
    e.preventDefault();
    const data = { id: product._id, count: count };
    await dispatch(updateCartCount(data));
  };

  return (
    // <div className="flex lg:h-40 flex-col flex-wrap sm:items-center sm:flex-row gap-4  py-4 px-2 border-b dark:border-gray-500 rounded-lg hover:bg-main-Color dark:hover:bg-gray-700 ">

    //   {customeContainer()}
    //   <div className="h-60 w-full min-w-[60px]   sm:w-36 mx-auto   sm:h-24 overflow-hidden ">
    //     <img
    //       src={
    //         "https://salaa-kxfx.onrender.com/products/" +
    //         product?.product?.imageCover
    //       }
    //       alt="logo"
    //       loading="lazy"
    //       className="object-contain p-2    w-full dark:border-gray-500   border rounded-lg h-full"
    //     />
    //   </div>
    //   <div className="flex flex-col sm:flex-row  rounded  sm:justify-between sm:flex-1 p-2 gap-4">
    //     <div className="flex items-center sm:items-start justify-between sm:flex-col  gap-4">
    //       <h3 className="text-2xl text-center capitalize font-semibold tracking-tight text-gray-700 dark:text-white">
    //         {product?.product?.title}
    //       </h3>
    //       <span
    //         style={{ backgroundColor: `${product?.color}` }}
    //         className=" flex w-5 h-5 cursor-pointer rounded-full border dark:bg-gray-700 "
    //       ></span>
    //     </div>
    //     <div className="flex justify-between items-center sm:flex-col  gap-4">
    //       <button onClick={handelUpdatecount}>update</button>
    //       <div className="flex  items-center w-16 justify-between    h-8 overflow-hidden rounded-sm bg-gray-100">
    //         <span
    //           onClick={() => setCount((prev) => prev + 1)}
    //           className=" w-8 h-full  text-center font-semibold text-xl cursor-pointer "
    //         >
    //           +
    //         </span>
    //         <span className="bg-white h-full font-semibold w-8 border border-gray-200 text-center">
    //           <p className="py-1">{count}</p>
    //         </span>
    //         <span
    //           onClick={() => setCount((prev) => prev - 1)}
    //           className=" w-8 text-center h-full font-semibold  text-xl cursor-pointer "
    //         >
    //           -
    //         </span>
    //       </div>
    //       <div className="flex items-center justify-center  gap-10 ">
    //         <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
    //           ${product?.price * count}{" "}
    //         </h3>
    //         <span onClick={handelDeletItem} className="pt-1">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             height={16}
    //             width={16}
    //             className="dark:fill-[#9CA3AF]"
    //             viewBox="0 0 512 512"
    //           >
    //             {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
    //             <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    //           </svg>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="md:flex px-4 items-strech overflow-hidden py-8 md:py-10 lg:py-8 border  shadow-md rounded-lg bg-white dark:bg-gray-800  dark:border-gray-500 border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full flex justify-center items-center  overflow-hidden">
        <img
          src={
            "https://salaa-kxfx.onrender.com/products/" +
            product?.product?.imageCover
          }
          loading="lazy"
          alt="Black Leather Bag"
          className="h-40 w-full object-center  object-contain p-2  md:block hidden"
        />
        <img
           src={
            "https://salaa-kxfx.onrender.com/products/" +
            product?.product?.imageCover
          }
          loading="lazy"
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
            className=" w-16  px-1 border border-gray-200  focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >            
          </input>
        </div>
        <p className="text-xs leading-3 text-gray-600 dark:text-white ">
          Category: {product?.product?.category?.name}
        </p>
        <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
         Brand: {product?.product?.brand?.name}
        </p>
        <p className="w-96 flex items-center text-xs leading-3 text-gray-600 dark:text-white">
        <span>Color:</span> <span
            style={{ backgroundColor: `${product?.color}` }}
            className="inline-block ml-4   w-4 h-4 cursor-pointer rounded-full border dark:bg-gray-700 "
          ></span>
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex ">
           
            <p onClick={handelDeletItem} className="text-xs leading-3 underline text-red-500  cursor-pointer">
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
