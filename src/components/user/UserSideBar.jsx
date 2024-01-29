import {Link, NavLink} from "react-router-dom";
import {userSidBarLinks} from "../../utils/data/navsArrayInfo";
import { arrowLeft, arrowRight } from "../../utils/data/icons";
import { useState } from "react";

const UserSideBar = () => {
  const [open,setOpen]=useState(true)
  return (
    <aside id="default-sidebar" className={`${open?"w-56":"w-16"} transition-all duration-200 ease-linear   relative    `} aria-label="Sidebar">
      <span onClick={()=>setOpen(!open)} className="absolute top-10  -right-4 dark:bg-gray-900  bg-main-Color-2 w-10 p-3 h-10 rounded-full cursor-pointer ">
       
        {open?arrowLeft:arrowRight}
      </span>
      <div className=" h-screen p-2 flex justify-center py-4 overflow-y-auto bg-main-Color-2 dark:bg-gray-900 ">
      
        <ul className=" flex flex-col gap-6 justify-start pt-24 font-medium">
          {userSidBarLinks.map((link) => {
            return (
              <>
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 group"
                  >
                    <span className="w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      {link.icon}
                    </span>

                    <span className={`${open?"block ms-3":"hidden"}`}>{link.name}</span>
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default UserSideBar;
