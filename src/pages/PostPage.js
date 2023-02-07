import React, { useState } from "react";
import { Link } from "react-router-dom";

function PostPage() {
  // const [showModal, setShowModal] = useState(false);
  // const handleOnClose = () => setShowModal(false);
  return (
    <>
      <div className="flex flex-row justify-between m-12 mx-16">
        <h1 className="p-3 text-center font-black rounded-md text-white ">
          GROUP NAME
        </h1>

        {/* //////////////////////// */}
        {/* <Link to="/create" className="flex items-center">
          <button className="p-3 bg-white text-center font-black rounded-3xl text-teal-400">
            Join Group
          </button>
        </Link> */}
      </div>

      {/* group profile */}
      <div className="flex flex-row gap-8 px-2 sm:px-4 py-2.5 mx-16 my-12">
        {/* --------------col -1 */}
        <div className=" w-4/12 border-4 justify-start border-white rounded-lg shadow ">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-72 h-56 m-8 rounded-md shadow-lg"
              src="travel.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-bold text-white ">Group Name</h5>
          </div>
        </div>
        <div className="w-7/12 border-white border-4  rounded-lg shadow text-black ">
          <div className="mx-4">
            <label className="block text-xl font-bold mx-8 pl-0 " />
            <input
              placeholder="Write your post"
              className="shadow appearance-none border rounded-xl w-full my-2 py-2 px-2 text-black"
            />
            <button className="bg-white rounded-lg px-4 text-teal-400 text-lg font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
