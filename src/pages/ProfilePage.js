import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserImage from "../component/UserImage";
import EditProfile from "../feature/auth/EditProfile";
import GroupCard from "../feature/auth/GroupCard";
// import GroupCard from "../feature/auth/GroupCard";
import useAuth from "../hooks/useAuth";

function ProfilePage() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { authenticatedUser } = useAuth();
  return (
    <>
      {/* //////////////////////// */}
      <div className="flex flex-row justify-around px-2 sm:px-4 py-2.5 mx-40 my-12">
        {/* --------------col -1 */}
        <div className=" w-4/12 border-4 border-white rounded-lg shadow py-8">
          <div className="flex flex-col items-center pb-10">
            <UserImage src={authenticatedUser.profileImage} size="200" />
            <h5 className="my-4 text-xl font-bold text-white ">
              {authenticatedUser.firstName} {authenticatedUser.lastName}
            </h5>
            <p className="mb-1 text-sm font-bold text-white ">
              Email: {authenticatedUser.email}
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
                            Update Profile
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
                        <EditProfile
                          onSuccess={() => setShowProfileModal(false)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        {/* ------------ end ------------ */}

        {/* --------------col -2 */}
        <div className="w-7/12 bg-white border border-gray-200 rounded-lg shadow ">
          <h1 className="p-2 font-extrabold bg-teal-400 w-24 text-center rounded-xl mx-6 my-2 ">
            GROUPS
          </h1>

          <div className="flex flex-auto">
            <GroupCard size="100" />
          </div>
        </div>
        {/* ------------ end col 2------------ */}
      </div>
    </>
  );
}

export default ProfilePage;
