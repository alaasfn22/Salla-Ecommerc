"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { CustomeToast } from "./Toast";
import SwitchBtn from "./switchBtn/SwitchBtn";
import {  useState } from "react";
function NaveBar() {
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
  ];
  const [openNav, setOpenNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
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

  return (
    
    <nav className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-10 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
         {
          userName ? (
            <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={handleMenu}         
            
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
          ):(
 <Link to="/login">
            <button className=" hover:bg-blue-700 dark:text-white hover:text-white delay-75 ease-in-ou- transition-all font-semibold p-2 rounded-lg">
  sign in
</button></Link>
          )
         }
          {/* Dropdown menu */}
          <div
            className={
              openMenu
                ? "absolute top-16 right-[20px] z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                : "hidden"
            }
            >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {userName}
              </span>
              <span onClick={handleMenu} className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {userEmail}
              </span>
            </div>
            <ul className="py-2" >
             {
              auth?.role === "admin" && (
                <li>
                <Link
                  to="/dashboard"
                 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              )
             }

              <li>
                <Link
                  href="/"
                  onClick={logOut}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={handleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            openNav
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : "hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
          }
          // className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col gap-2 font-medium p-4 md:p-0 mt-4 border dark:bg-gray-800 dark:border-gray-700 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:items-center  ">
            {links.map((link, index) => {
              return (
                <li key={index} className="p-2">
                  <NavLink
                    to={link.path}
                    onClick={()=>{setOpenNav(false)}}
                    className="block py-2 px-3  border-b-2 md:border-none capitalize  rounded-xl md:bg-transparent md:p-0 dark:text-white dark:border-gray-700 hover:text-blue-400     "
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          <span className="flex justify-end items-end"><SwitchBtn/></span>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NaveBar;
