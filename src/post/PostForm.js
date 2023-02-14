import React from "react";
import UserImage from "../component/UserImage";
import useAuth from "../hooks/useAuth";
import Dropdown from "../component/Dropdown";

export default function PostForm() {
  const { authenticatedUser } = useAuth();

  return (
    <div className="w-full">
      <div>
        <div className="flex flex-row w-full border-white border-4 rounded-lg shadow justify-between p-2 mb-8">
          <UserImage src={authenticatedUser.profileImage} size="50" />
          <h5 className="my-2 text-xl font-bold text-white ">
            {authenticatedUser.firstName} {authenticatedUser.lastName}
          </h5>
          <Dropdown className="" />
        </div>

        <form className=" flex flex-row mx-2">
          <input
            type="text"
            placeholder="Write your post"
            className="shadow appearance-none border w-full rounded-3xl py-2 pl-4 mr-4 text-black "
          />
          <button
            type="submit"
            className="bg-white rounded-lg my-2 px-4 text-teal-400 text-xl font-bold"
          >
            Post
          </button>
        </form>
        <hr className="my-6 border-2" />
        <h3 className="p-2 text-left text-3xl font-black rounded-md text-white ">
          Forum
        </h3>
      </div>
    </div>
  );
}
