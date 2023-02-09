import React from "react";
import useAuth from "../hooks/useAuth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../layout/SearchBar";

function NavbarLayout() {
  //   const navigate = useNavigate();

  //   function handleClick() {
  //     navigate("/home");
  //   }
  const { logout } = useAuth();

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
                    alt="Bonnie"
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
                <button
                  // #navigate back to home because authenticatedUser=null so it remove token from local storage
                  type="button"
                  onClick={logout} //# from AuthContext
                  className="block py-4 pl-1 pr-2 font-semibold text-xl leading-[29px] text-white"
                >
                  LOG OUT
                </button>
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
