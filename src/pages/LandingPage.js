import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "../layout/SearchBar";

function LandingPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // const [input, setInput] = useState(initialInput);
  // const [error, setError] = useState();

  // const handleSubmitForm = async (e) => {
  //   try {
  //     e.preventDefault();
  //     console.log(input);
  //     const result = validateRegister(input);
  //     if (result) {
  //       setError(result);
  //     }else {
  //       console.log("no err");
  //     }
  //   } catch (err) {}
  // };

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
      {/* ------------------------LANDING PAGE NAV BAR------------------------- */}
      <div>
        {/* Friendzone Logo */}
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

            {/* Search Bar */}
            <SearchBar />

            {/* ---------------------Login navbar------------------------*/}
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

                            {/* Exit button */}
                            <button
                              className="bg-transparent border-0 text-black float-right"
                              onClick={() => setShowLoginModal(false)}
                            >
                              <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                                x
                              </span>
                            </button>
                          </div>

                          {/* Login modal form */}
                          <div className="relative p-4 flex-auto">
                            <form className="rounded-3xl px-16 pt-6 pb-8 w-full">
                              <label className="block text-black text-sm font-bold mb-1">
                                E-mail
                              </label>
                              <input
                                placeholder="email@address.com"
                                className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
                              />
                              <label className="block text-black text-sm font-bold mb-1">
                                Password
                              </label>
                              <input
                                placeholder="Your Password"
                                className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
                              />
                            </form>
                          </div>

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

      {/* ///////////////////////////////////// */}
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

                {/* New account modal form */}
                <div className="relative p-4 flex-auto">
                  <form className="rounded-3xl px-16 pt-6 pb-8 w-full">
                    <label className="block text-black font-bold mb-1">
                      First Name
                    </label>
                    <input
                      placeholder=" First Name"
                      name="firstName"
                      className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
                    />
                    <label className="block text-black font-bold mb-1">
                      Last Name
                    </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
                    />

                    <label className="block text-black text-sm font-bold mb-1">
                      E-mail
                    </label>
                    <input
                      placeholder=" email@address.com"
                      className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Password
                    </label>
                    <input
                      placeholder=" Minimum 8 characters"
                      className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Confirm Password
                    </label>
                    <input
                      placeholder=" Confirm Your Password"
                      className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
                    />
                    <span>Already have an account?</span>
                  </form>
                </div>

                {/* Footer modal */}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowRegisterModal(false)}
                  >
                    Close
                  </button> */}
                  <Link to="/profile">
                    <button
                      className="text-white bg-teal-400 font-bold uppercase text-center px-6 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mt-0 "
                      type="button"
                      onClick={() => setShowRegisterModal(false)}
                    >
                      Create Account
                    </button>
                  </Link>
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
