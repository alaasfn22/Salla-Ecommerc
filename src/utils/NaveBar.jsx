"use client";

import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { CustomeToast } from "./Toast";
import SwitchBtn from "./switchBtn/SwitchBtn";
import { useState } from "react";
import CartLoggedHooks from "../Hooks/Cart/cartLoggedHooks";
import GetProductPageHook from "../Hooks/Products/GetProductPageHook";

function NaveBar() {
  // eslint-disable-next-line no-unused-vars
  const [cartNumbers, totalPrice, cartProducts, isLoading] = CartLoggedHooks();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Category",
      path: "/category",
    },
    {
      name: "brand",
      path: "/brand",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];
  const [openNav, setOpenNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
    var collapseMenu = document.getElementById("collapseMenu");
    if (collapseMenu.style.display === "block") {
      collapseMenu.style.display = "none";
    } else {
      collapseMenu.style.display = "block";
    }
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // const { auth, setAuth } = useAhthContext()
  const auth = JSON.parse(localStorage.getItem("userData"));
  let userName = auth?.name;
  let userEmail = auth?.email;
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    CustomeToast("success", "Logout Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const [, , , , , , , , , , getFilters, ,] = GetProductPageHook();
  const handelSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    window.sessionStorage.setItem("search", search);
    setTimeout(() => {
      getFilters()
    }, 1000);

    if(window.location.pathname !=="/products"){
      window.location.replace("/products")
    }
  };
  return (
    <header className="shadow-md bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-[sans-serif]">
      <section className="flex items-center md:justify-center relative py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        <div className="hidden  md:left-10 md:absolute z-50 md:flex  rounded ">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                onChange={handelSearch}
                value={sessionStorage.getItem("search")}
                className="block w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required=""
              />
            </div>
          </form>
        </div>

        <Link to="/" className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={38}
            width={38}
            viewBox="0 0 576 512"
            className="fill-[#007bff] "
          >
            <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
          </svg>
          <p className="mt-2 text-2xl font-semibold text-gray-700">
            Salla Store
          </p>
        </Link>
        <div className="absolute sm:right-10 right-4 flex items-center">
          <span className="relative sm:mr-8 mr-2">
            <span className="flex justify-end items-end">
              <SwitchBtn />
            </span>
          </span>
          <Link to="/cart">
            <span className="relative sm:mr-8 mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="cursor-pointer dark:fill-[#fff] dark:hover:fill-[#007bff] hover:fill-[#007bff] inline-block"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"
                />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white dark:bg-white dark:text-gray-700">
                {cartNumbers}
              </span>
            </span>
          </Link>
          {/* start dropdown menu */}
          <div className="relative font-[sans-serif] w-max mx-auto">
            {userName ? (
              <button
                type="button"
                onClick={() => setOpenMenu(!openMenu)}
                className=" py-2 flex items-center   text-sm font-semibold  outline-none "
              >
                <img
                  src="https://readymadeui.com/profile_6.webp"
                  className="w-7 h-7 mr-2 rounded-full shrink-0"
                />
                <span className="hidden sm:block  text-[#333] dark:text-white">
                  {userName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-[#333] inline ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                </span>
              </button>
            ) : (
              <Link to="/login">
                <div className="inline-block cursor-pointer border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="dark:fill-[#fff] dark:hover:fill-[#007bff] hover:fill-[#007bff] "
                  >
                    <circle cx={10} cy={7} r={6} data-original="#000000" />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
              </Link>
            )}
            {openMenu && (
              <ul className="absolute right-0 mt-4 shadow-lg bg-white text-[#333] dark:text-white dark:bg-gray-700 py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
                <li className="py-2.5 px-6 flex items-center hover:bg-gray-400  text-sm cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-[18px] h-[18px] mr-3"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                      data-original="#000000"
                    />
                  </svg>
                  View profile
                </li>
                {auth.role === "admin" && (
                  <Link to="/dashboard">
                    <li className="py-2.5 px-6 flex items-center hover:bg-gray-400  text-sm cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-[18px] h-[18px] mr-3"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                          data-original="#000000"
                        />
                      </svg>
                      Dashboard
                    </li>
                  </Link>
                )}
                <a href="/">
                  <li
                    onClick={logOut}
                    className="py-2.5 px-6 flex items-center hover:bg-gray-400  text-sm cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-[18px] h-[18px] mr-3"
                      viewBox="0 0 6.35 6.35"
                    >
                      <path
                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                        data-original="#000000"
                      />
                    </svg>
                    Logout
                  </li>
                </a>
              </ul>
            )}
          </div>
          {/* end dropdown menu */}
        </div>
      </section>

      {/* start navbar */}
      <div className="flex flex-wrap justify-center px-10 py-3 relative">
        <div
          id="toggle"
          className="flex ml-auto lg:order-1 lg:hidden relative z-40"
        >
          <button onClick={handleNav} className="ml-7">
            <svg
              className="w-7 h-7 dark:fill-[#fff]"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          className="lg:!flex lg:space-x-10 max-lg:space-y-3 max-lg:hidden max-lg:w-full max-lg:my-4"
        >
          {links.map((link, index) => {
            return (
              <li key={index} className=" max-lg:py-2 ">
                <NavLink
                  to={link.path}
                  className=" hover:text-[#007bff] dark:hover:text-[#007bff]  p-2  border-b-2 lg:border-none capitalize  rounded-xl md:bg-transparent lg:p-0 dark:text-white dark:border-gray-700 hover:text-blue-400   block text-[15px]"
                >
                  <span>{link.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* end navbar */}
    </header>
  );
}
export default NaveBar;
