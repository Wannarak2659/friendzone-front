import React from "react";
import { Link } from "react-router-dom";

function GroupPage() {
  return (
    <>
      <div className="flex flex-row justify-between my-4 mx-16">
        <h1 className="p-3 text-center text-4xl font-black rounded-md text-white ">
          Discover Group
        </h1>

        <Link to="/create" className="flex items-center">
          <button className="p-3 bg-white text-center text-xl font-black rounded-3xl text-teal-400">
            Create Group
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-3 mx-8">
        {/* flex flex-row */}
        {/* ------------------ Blog Card -------------------- */}
        <div className="max-w-lg mx-auto -2">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <img
              className="rounded-t-lg h-72 w-96"
              src="gamenight.jpg"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Travel Together
              </h5>

              <p className="font-normal text-gray-700 mb-3">
                The journey of a thousand miles begins with a single step with a
                good companion.
              </p>

              <Link
                to="/post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
              >
                Join Group
              </Link>
            </div>
          </div>
        </div>
        {/* End group */}

        {/* ------------------ Blog Card -------------------- */}
        <div className="max-w-lg mx-auto -2">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <img
              className="rounded-t-lg h-72 w-96"
              src="volunteer.jpg"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Volunteer
              </h5>

              <p className="font-normal text-gray-700 mb-3">
                “ No act of kindness, no matter how small, is ever wasted.”
                -Aesop-
              </p>

              <Link
                to="/post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
              >
                Join Group
              </Link>
            </div>
          </div>
        </div>
        {/* End group */}

        {/* ------------------ Blog Card -------------------- */}
        <div className="max-w-lg mx-auto -2">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <Link to="/post">
              <img
                className="rounded-t-lg h-72 w-96"
                src="gamenight.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link to="/post">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Game Night
                </h5>

                <p className="font-normal text-gray-700 mb-3">
                  The best memories are made gathered around the table.
                </p>
              </Link>
              <Link
                to="/post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
              >
                Join Group
              </Link>
            </div>
          </div>
        </div>
        {/* End group */}
      </div>
    </>
  );
}

export default GroupPage;
