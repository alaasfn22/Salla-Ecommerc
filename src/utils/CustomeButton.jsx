/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";
import {useSwiper} from "swiper/react";

const CustomeButton = ({pathname, title, name}) => {
  const swiper = useSwiper();
  return (
    <>
      <div className="relative dark:text-white py-4 flex justify-between items-center font-bold">
        <div className="flex flex-col sm:flex-row justify-start">
          <h2 className="text-2xl">{title}</h2>
          {pathname && (
            <Link to={pathname}>
              <span className="ml-2 mt-2 flex items-center text-gray-400">
                <span className="text-sm ">All Offers</span>
                <svg
                  className="ml-3 h-3.5 "
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  />
                </svg>
              </span>
            </Link>
          )}
        </div>

        {
          name&&
          <div className="ml-auto flex">
          <span
            onClick={() => swiper.slidePrev()}
            className="h-6 w-6 flex items-center justify-center rounded-md bg-btn-color2 dark:bg-gray-600 dark:hover:bg-btn-color2  cursor-pointer"
          >
            <svg
              className="h-3 text-gray-700  fill-white"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z" />
            </svg>
          </span>
          <span
            onClick={() => swiper.slideNext()}
            className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-btn-color2 dark:bg-gray-600 dark:hover:bg-btn-color2  cursor-pointer"
          >
            <svg
              className="h-3 text-gray-700  fill-white"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" />
            </svg>
          </span>
        </div>
        }
      </div>

      {/* <div className="flex py-4 justify-between dark:text-white">
      <h1 className="text-2xl  font-bold">{name}</h1>
      <Link to={pathname}>
        {title && (
          <button
            type="button"
            className="text-white bg-btn-color hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-500 dark:hover:bg-btn-color dark:focus:ring-blue-800"
          >
            {title}
          </button>
        )}
      </Link>
    </div> */}
    </>
  );
};

export default CustomeButton;
