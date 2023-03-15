import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authApi from "../apis/auth-api";
import DropdownIcon from "../assets/Icons/DropdownIcon";

export default function Dropdown({ postId }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const navigate = useNavigate();

  const handleEditPost = async (e) => {
    e.preventDefault();
    const res = await authApi.editPost(postId);
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();

    const res = await authApi.deletePost(postId);
    // navigate("group/:id"); //?????
  };

  return (
    <div className="">
      <div className="relative">
        <div
          className="flex items-center px-4 text-white font-black text-xl "
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <DropdownIcon />
        </div>
        <div
          className={`absolute right-0 w-48 py-2 mt-1 bg-white rounded-md shadow-lg z-10 
          ${openDropdown ? "" : "hidden"}`}
        >
          <button
            className="block px-4 py-2 text-gray-800"
            onClick={handleEditPost}
          >
            Edit
          </button>
          <button
            className="block px-4 py-2 text-gray-800"
            onClick={handleClickDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
