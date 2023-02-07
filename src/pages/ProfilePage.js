import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "../feature/auth/EditProfile";

function ProfilePage() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  return (
    <>
      {/* //////////////////////// */}
      <div className="flex flex-row justify-around px-2 sm:px-4 py-2.5 mx-40 my-12">
        {/* --------------col -1 */}
        <div className=" w-4/12 border-4 border-white rounded-lg shadow ">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-48 h-48 m-8 rounded-full shadow-lg"
              src="user1.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-bold text-white ">Bonnie Green</h5>
            <p className="mb-1 text-sm font-bold text-white ">
              Email: a@gmail.com
            </p>

            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                to=""
                onClick={() => setShowProfileModal(true)}
                className="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-white bg-teal-400 rounded-lg"
              >
                Edit Profile
              </Link>

              {showProfileModal ? (
                <>
                  {/* Modal button */}
                  <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                          <h3 className=" text-black text-xl font=semibold">
                            Edit Profile
                          </h3>

                          {/* Exit button */}
                          <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => setShowProfileModal(false)}
                          >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                              x
                            </span>
                          </button>
                        </div>

                        {/* Profile modal form */}
                        <EditProfile />

                        {/* Footer modal */}
                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                          {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setshowProfileModal(false)}
                  >
                    Close
                  </button> */}
                          <Link to="/profile">
                            <button
                              className="text-white bg-teal-400 font-bold uppercase text-center px-6 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mt-0 "
                              type="button"
                              onClick={() => setShowProfileModal(false)}
                            >
                              Edit Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        {/* ------------ end col 1------------ */}

        {/* --------------col -2 */}
        <div className="w-7/12 bg-white border border-gray-200 rounded-lg shadow ">
          <h1 className="p-2 font-extrabold bg-teal-400 w-24 text-center rounded-xl mx-6 my-2 ">
            GROUPS
          </h1>
          <div className="grid grid-cols-3 mx-8">
            {/* group  */}

            <div className=" flex flex-row m-6 w-36">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-6">
                <img className="rounded-t-lg " src="gamenight.jpg" alt="" />
                <div className="p-2">
                  <h5 className="text-gray-900 font-sm text-sm  text-center tracking-tight ">
                    Travel Together
                  </h5>
                </div>
              </div>
            </div>
            {/* end group */}

            {/* group  */}
            <div className=" flex flex-row m-6 w-36">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-6">
                <img className="rounded-t-lg " src="gamenight.jpg" alt="" />
                <div className="p-2">
                  <Link
                    to="/"
                    className="text-gray-900 font-sm text-sm  text-center tracking-tight "
                  >
                    Travel Together
                  </Link>
                </div>
              </div>
            </div>
            {/* end group */}

            {/* group  */}
            <div className=" flex m-6 w-36">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-6">
                <img className="rounded-t-lg " src="gamenight.jpg" alt="" />
                <div className="p-2">
                  <h5 className="text-gray-900 font-sm text-sm  text-center tracking-tight ">
                    Travel Together
                  </h5>
                </div>
              </div>
            </div>
            {/* end group */}
          </div>
        </div>
        {/* ------------ end col 2------------ */}
      </div>
    </>
  );
}

export default ProfilePage;
