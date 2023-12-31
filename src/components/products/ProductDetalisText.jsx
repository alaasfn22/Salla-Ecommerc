/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

const ProductDetalisText = ({ product, brand, category }) => {
  const [colorCheck, setColorCheck] = useState("");
  const [color, setColor] = useState("");
  const handelSelectColor = (colorIndex, color) => {
    setColor(color);
    setColorCheck(colorIndex);
  };

  return (
    <div className=" flex flex-col gap-8 md:px-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold capitalize">
          title : {product?.title}
        </h3>
        <p className="text-2xl font-semibold capitalize">
          Category : <span className="">{category.name}</span>{" "}
        </p>
        <p className="text-2xl font-semibold capitalize">
          Brand : <span className=""> {brand.name}</span>
        </p>
        <p className="text-2xl font-semibold capitalize">
          Stock : {product?.quantity}
        </p>

        <div className="text-2xl font-semibold capitalize flex gap-4">
          <p className="">${product?.price} </p>
          <del className="after-price">$1000</del>
        </div>
        <div className="">
          <p className="text-2xl font-semibold capitalize">Description:</p>
          <p className="text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </div>

      <div className=" flex flex-wrap gap-4  ">
        <>
          {product.availableColors ? (
            product.availableColors.map((color, index) => {
              return (
                <span
                  key={color}
                  onClick={() => handelSelectColor(index, color)}
                  style={{ backgroundColor: color }}
                  className={
                    colorCheck === index
                      ? "flex w-5 h-5 cursor-pointer rounded-full dark:bg-gray-700 border-2 border-blue-400 "
                      : "flex w-5 h-5 cursor-pointer rounded-full dark:bg-gray-700 "
                  }
                />
              );
            })
          ) : (
            <p>No color</p>
          )}
        </>

        <p className=""></p>
      </div>

      <div className="mx-auto lg:mx-0">
        <button
          type="button"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetalisText;
