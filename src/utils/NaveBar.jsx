"use client";

import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { CustomeToast } from "./Toast";
import SwitchBtn from "./switchBtn/SwitchBtn";
import { useState } from "react";
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
    {
      name: "Cart",
      path: "/cart",
    },
  ];
  const [openNav, setOpenNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
    var collapseMenu = document.getElementById('collapseMenu');
    if (collapseMenu.style.display === 'block') {
      collapseMenu.style.display = 'none';
    } else {
      collapseMenu.style.display = 'block';
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

  return (
    <header className="shadow-md bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-[sans-serif]">
      <section className="flex items-center lg:justify-center relative py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="20px"
            className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent w-full text-sm"
          />
          .
        </div>
        <a href="javascript:void(0)">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="md:w-[170px] w-36"
          />
        </a>
        <div className="absolute sm:right-10 right-4 flex items-center">
          <span className="relative sm:mr-8 mr-6">
            <span className="flex justify-end items-end">
              <SwitchBtn />
            </span>
          </span>
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
              4
            </span>
          </span>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {userName ? (
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
                <span
                  onClick={handleMenu}
                  className="block text-sm  text-gray-500 truncate dark:text-gray-400"
                >
                  {userEmail}
                </span>
              </div>
              <ul className="py-2">
                {auth?.role === "admin" && (
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

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
          </div>
        </div>
      </section>
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
    </header>

    //     <nav className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-10 w-full">
    //       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //         <Link
    //           to="/"
    //           className="flex items-center space-x-3 rtl:space-x-reverse"
    //         >
    //           <img
    //             src="https://flowbite.com/docs/images/logo.svg"
    //             className="h-8"
    //             alt="Flowbite Logo"
    //           />
    //           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //             Flowbite
    //           </span>
    //         </Link>
    //         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

    //          {
    //           userName ? (
    //             <button
    //             type="button"
    //             className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //             onClick={handleMenu}

    //           >
    //             <span className="sr-only">Open user menu</span>
    //             <img
    //               className="w-8 h-8 rounded-full"
    //               src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    //               alt="user photo"
    //             />
    //           </button>
    //           ):(
    //  <Link to="/login">
    //             <button className=" hover:bg-blue-700 dark:text-white hover:text-white delay-75 ease-in-ou- transition-all font-semibold p-2 rounded-lg">
    //   sign in
    // </button></Link>
    //           )
    //          }
    //           {/* Dropdown menu */}
    //           <div
    //             className={
    //               openMenu
    //                 ? "absolute top-16 right-[20px] z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    //                 : "hidden"
    //             }
    //             >
    //             <div className="px-4 py-3">
    //               <span className="block text-sm text-gray-900 dark:text-white">
    //                 {userName}
    //               </span>
    //               <span onClick={handleMenu} className="block text-sm  text-gray-500 truncate dark:text-gray-400">
    //                 {userEmail}
    //               </span>
    //             </div>
    //             <ul className="py-2" >
    //              {
    //               auth?.role === "admin" && (
    //                 <li>
    //                 <Link
    //                   to="/dashboard"

    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                 >
    //                   Dashboard
    //                 </Link>
    //               </li>
    //               )
    //              }

    //               <li>
    //                 <Link
    //                   href="/"
    //                   onClick={logOut}
    //                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                 >
    //                   Sign out
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <button
    //             type="button"
    //             onClick={handleNav}
    //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           >

    //             <span className="sr-only">Open main menu</span>
    //             <svg
    //               className="w-5 h-5"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 17 14"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M1 1h15M1 7h15M1 13h15"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <div
    //           className={
    //             openNav
    //               ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
    //               : "hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
    //           }
    //           // className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //         >
    //           <ul className="flex flex-col gap-2 font-medium p-4 md:p-0 mt-4 border dark:bg-gray-800 dark:border-gray-700 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:items-center  ">
    //             {links.map((link, index) => {
    //               return (
    //                 <li key={index} className="p-2">
    //                   <NavLink
    //                     to={link.path}
    //                     onClick={()=>{setOpenNav(false)}}
    //                     className="block py-2 px-3  border-b-2 md:border-none capitalize  rounded-xl md:bg-transparent md:p-0 dark:text-white dark:border-gray-700 hover:text-blue-400     "
    //                   >
    //                     {link.name}
    //                   </NavLink>
    //                 </li>
    //               );
    //             })}
    //           <span className="flex justify-end items-end"><SwitchBtn/></span>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
  );
}
export default NaveBar;
