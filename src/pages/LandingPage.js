import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LoginForm from "../feature/auth/LoginForm";
import RegisterForm from "../feature/auth/RegisterForm";
import SearchBar from "../layout/SearchBar";

function LandingPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div>
      <img
        src="macbook1.png"
        alt="cover"
        className="absolute w-[795px] h-[470px] left-[520px] top-[200px]"
      />

      {/* text box */}
      <h1 className="absolute w-[480px] h-[163px] not-italic font-semibold text-4xl leading-[120%] flex items-center text-justify left-[40px] top-[250px]">
        Joining a group can open up a new chances and possibilities when pursing
        a share interest
      </h1>

      {/* get started button */}
      <button
        onClick={() => setShowRegisterModal(true)}
        className="bg-white text-teal-500 font-extrabold border-2 rounded-3xl absolute w-[258px] h-[62px] left-[150px] top-[450px]"
      >
        GET STARTED
      </button>

      {/* ########### LANDING PAGE NAV BAR ############## */}
      <div>
        {/* --------- Friendzone Logo ---------- */}
        <nav className="px-2 sm:px-4 py-2.5 ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="" className="flex items-center">
              <img
                src="FriendLogo.png"
                className="h-20 mr-3 rounded-full  "
                alt="Friend Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </Link>

            {/* -------------Search Bar-------------- */}
            <SearchBar />

            {/* -------------Login navbar------------*/}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <div className="flex flex-col p-4 mt-4 border md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0">
                {/* md:space-x-8 */}
                <Link
                  to="#"
                  onClick={() => setShowLoginModal(true)}
                  className="block py-4 pl-1 pr-2 font-semibold text-xl leading-[29px] text-white"
                >
                  Log in
                </Link>

                {/* ////////////// */}
                {showLoginModal ? (
                  <>
                    {/* Modal button */}
                    <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className=" text-black text-xl font=semibold">
                              Log in
                            </h3>

                            {/* Close button */}
                            <button
                              className="bg-transparent border-0 text-black float-right"
                              onClick={() => setShowLoginModal(false)}
                            >
                              <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                                x
                              </span>
                            </button>
                          </div>

                          {/* Login form */}
                          <LoginForm />

                          {/* Footer modal */}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            {/* <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => setShowLoginModal(false)}
                            >
                              Close
                            </button> */}
                            <Link
                              to="/"
                              className="text-white bg-teal-400 font-bold uppercase text-sm px-6 py-3 rounded shadow "
                              type="button"
                              onClick={() => setShowLoginModal(false)}
                            >
                              LOG IN
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {/* <li>
                  <Link
                    to="#"
                    className="block py-2 pl-3 pr-4 font-semibold text-xl leading-[29px] text-white"
                  >
                    Register
                  </Link>
                </li> */}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ------ Register -------*/}
      {showRegisterModal ? (
        <>
          {/* Modal button */}
          <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className=" text-black text-xl font=semibold">
                    Create New Account
                  </h3>

                  {/* Exit button */}
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowRegisterModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                {/* Register modal form */}
                <RegisterForm onClose={() => setShowRegisterModal(false)} />

                {/* Footer modal */}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowRegisterModal(false)}
                  >
                    Close
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Outlet />
    </div>
  );
}

export default LandingPage;
