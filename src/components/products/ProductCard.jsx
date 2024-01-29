/* eslint-disable react/prop-types */
import {Fragment} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {imageAPi} from "../../Api/imageAPI";


const ProductCard = ({product}) => {

  return (
    <Fragment>
      <div className=" border  bg-white  cursor-pointer dark:bg-gray-800 dark:border-gray-700 group ">
        <div className="h-64 overflow-hidden relative   ">
          <LazyLoadImage
            className="p-4 mx-auto w-52 h-52 object-contain rounded-t-lg "
            src={imageAPi + product.imageCover.slice(9)}
            alt={product.title}
            PlaceholderSrc="vite.svg"
            loading="lazy"
          />
          <div className="absolute z-20 w-0 h-0 right-1/2 bottom-1/2 group-hover:h-full group-hover:w-full group-hover:right-0 group-hover:bottom-0 overflow-hidden transition-all duration-300 ease-linear  bg-gray-900 bg-opacity-50">
            <div className="flex justify-center w-full h-full items-center ">
              <span className="p-2 bg-white mx-2 cursor-pointer hover:bg-main-Color-2 ">
                <svg
                  className="h-5 fill-gray-600 "
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
                </svg>
              </span>
              <span className="p-2 mx-2 bg-white cursor-pointer hover:bg-main-Color-2 ">
               <Link to={`/productDetails?productId=${product._id}&title=${product.title}`}>
               <svg
                  className="h-5  fill-gray-600 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
               </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 flex items-center justify-between">
          <h5 className="text-xl group-hover:text-btn-color2 capitalize font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
