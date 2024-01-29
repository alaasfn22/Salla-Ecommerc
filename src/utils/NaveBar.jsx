"use client";

import {Link, NavLink} from "react-router-dom";
import {CustomeToast} from "./Toast";
import {Dropdown} from "flowbite-react";

import {useState} from "react";
import CartLoggedHooks from "../Hooks/Cart/cartLoggedHooks";
import GetProductPageHook from "../Hooks/Products/GetProductPageHook";
import {cartIcon, loginIcon, wishlistIcon} from "./data/icons";

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

  // const { auth, setAuth } = useAhthContext()
  const auth = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("token");
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
      getFilters();
    }, 1000);

    if (window.location.pathname !== "/products") {
      window.location.replace("/products");
    }
  };

  return (
    <>
      <header className="md:sticky  top-0 z-50 bg-white bg-opacity-75  shadow-sm">
        <div className="container px-4  py-4 flex justify-between items-center">
          {/* logo */}
          <div className="">
            <img
              className="h-8 md:h-10"
              src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
              alt=""
            />
          </div>
          {/* search */}
          {/* <div className="w-full xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden lg:flex items-center">
            <select
              className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
              name=""
              id=""
            >
              <option>all categories</option>
            </select>
            <input
              className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />
            <svg
              className="ml-auto h-5 px-4 text-gray-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              />
            </svg>
          </div> */}

          {/* buttons */}
          <nav className="contents">
            <ul className="ml-4 xl:w-48 flex items-center justify-end">
              {token && (
                <li className="ml-2 lg:ml-4 relative inline-block">
                  <Dropdown
                    label=""
                    className="w-40"
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <button
                        id="dropdownUserAvatarButton"
                        data-dropdown-toggle="dropdownAvatar"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          alt="user photo"
                        />
                      </button>
                    )}
                  >
                    <Dropdown.Item className="border-b">
                      Welcome {userName}
                      </Dropdown.Item>
                    {auth?.role === "admin" && (
                      <Dropdown.Item>
                        <Link to="/dashboard">Dashboard</Link>
                      </Dropdown.Item>
                    )}
                    {/* {auth?.role === "user" && (
                      <Dropdown.Item>
                        <Link to="/profile">profile</Link>
                      </Dropdown.Item>
                    )} */}

                    <Dropdown.Item>
                      <Link to="/" onClick={logOut}>
                        Sign out
                      </Link>
                    </Dropdown.Item>
                  </Dropdown>
                </li>
              )}
              {!token && (
                <li className="ml-2 lg:ml-4 relative inline-block">
                  <Link className="" to="/login">
                    {loginIcon}
                  </Link>
                </li>
              )}
              <li className="ml-2 lg:ml-4 relative inline-block">
                <Link className="" to="#">
                  <div className="absolute -top-1 right-0 z-10 bg-btn-color2 text-white dark:bg-gray-500 text-xs font-bold px-1 py-0.5 rounded-sm">
                    3
                  </div>
                  {wishlistIcon}
                </Link>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block">
                <Link className="" to="/cart">
                  <div className="absolute -top-1 right-0 z-10 text-white bg-btn-color2 text-xs font-bold px-1 py-0.5 rounded-sm">
                    {cartNumbers}
                  </div>
                  {cartIcon}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        {/* header navigation */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* cta */}
          <button className="bg-btn-color2 text-white dark:bg-gray-700 font-bold uppercase px-4 xl:px-6 py-2 xl:py-3 rounded flex-shrink-0 flex items-center">
            <svg
              className="h-8 p-1 fill-white"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
                className=""
              />
            </svg>
            <span className="ml-4">shop by category</span>
          </button>
          {/* menu */}
          <nav className="hidden md:contents ">
            <ul className="flex items-center text-sm font-bold">
              {links.map((link, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className="px-2 lg:px-3 flex items-center   hover:text-btn-color2 font-serif"
                    >
                      <NavLink to={link.path} className="truncate max-w-24">
                        <span>{link.name}</span>
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
          {/* bar */}
          <span
            onClick={() => {
              setOpenNav(true);
            }}
            className="cursor-pointer md:hidden"
          >
            <svg
              className="h-8 p-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
                className=""
              />
            </svg>
          </span>
        </div>
      </header>
      {/* mobile */}
      <div
        className={`h-screen w-full  flex  ${
          openNav ? "left-0" : "-left-[850px]"
        } md:hidden transition-all duration-200 ease-linear  absolute top-0 bottom-0  z-[999]`}
      >
        <nav className={`w-1/2 h-full bg-main-Color-2 bg-opacity-95`}>
          {/* close */}
          <div
            onClick={() => {
              setOpenNav(false);
            }}
            className="flex cursor-pointer justify-end p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className=" mt-40 ">
            <ul className="flex flex-col items-center gap-8 text-sm font-bold">
              {links.map((link, index) => {
                return (
                  <>
                    <li key={index} className=" ">
                      <NavLink
                        to={link.path}
                        className="truncate text-xl hover:text-gray-50 max-w-24"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </nav>
        <div
          onClick={() => setOpenNav(false)}
          className="w-1/2 h-full bg-black opacity-75"
        ></div>
      </div>
    </>
  );
}
export default NaveBar;
