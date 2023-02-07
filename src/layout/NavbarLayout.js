import React from "react";

import { Link, Outlet } from "react-router-dom";
import SearchBar from "../layout/SearchBar";

function NavbarLayout() {
  return (
    <>
      {/* Friendzone Logo */}
      <nav className="px-1 py-2.5 mx-12">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center">
            <img
              src="FriendLogo.png"
              className="h-24 mr-3 rounded-full  "
              alt="Friend Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>

          {/* Search Bar */}
          <SearchBar />

          {/* ---------------------Group, avatar and Logout navbar------------------------*/}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 mx-0">
              <li>
                <Link to="/profile" className="block py- pl-1 pr-2 ">
                  <img
                    className="w-10 h-10 m-2 rounded-full shadow-lg"
                    src="user1.jpg"
                    alt="Bonnie image"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-4 pl-1 pr-2 font-bold text-xl leading-[29px] text-white"
                  aria-current="page"
                >
                  Group
                </Link>
              </li>

              <li>
                <Link
                  to={"/landing"}
                  className="block py-4 pl-1 pr-2 font-semibold text-xl leading-[29px] text-white"
                >
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavbarLayout;
