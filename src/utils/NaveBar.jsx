"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
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
  // const { auth, setAuth } = useAhthContext()
  const auth = JSON.parse(localStorage.getItem("auth"));
  let userName = auth?.userDetails?.name;
  let userEmail = auth?.userDetails?.email;
  const logOut = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <Navbar className="border-b-2 border-gray-100 ">
      <Navbar.Brand>
        <img src="vite.svg" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        {!auth && (
          <Link to="/login">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
          </Link>
        )}
        {auth && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{userName}</span>
              <span className="block truncate text-sm font-medium">
                {userEmail}
              </span>
            </Dropdown.Header>
            {auth.userDetails.role === "super_admin" && (
              <Dropdown.Item>
                <Link to="/dashboard">Dashboard</Link>
              </Dropdown.Item>
            )}

            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map((link) => {
          return (
            <Navbar.Link key={link.name}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </Navbar.Link>
          );
        })}
        <Navbar.Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NaveBar;
