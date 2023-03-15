import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserImage from "../../component/UserImage";
import useAuth from "../../hooks/useAuth";
import Dropdown from "../../component/Dropdown";
import * as authApi from "../../apis/auth-api";
import { useParams } from "react-router-dom";

export default function PostForm({
  // showPost,
  inputPost,
  setInputPost,
  handleSubmitForm,
}) {
  const navigate = useNavigate();
  const params = useParams();

  const { authenticatedUser } = useAuth();

  // const [inputPost, setInputPost] = useState();
  // const [showPost, setShowPost] = useState();

  // console.log("showpost ------> ", showPost);

  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();
  //   const res = await authApi.createPost({
  //     groupId: params.id,
  //     title: inputPost, /////
  //   });
  //   setShowPost(res.data);
  //   // navigate(`/group/${params.id}`);
  // };

  return (
    <div>
      <div className="">
        <div className="flex flex-row  border-white border-4 rounded-lg shadow justify-between p-2 mb-8 max-sm:600px">
          <UserImage src={authenticatedUser.profileImage} size="50" />
          <h5 className="my-2 text-xl font-bold text-white ">
            {authenticatedUser.firstName} {authenticatedUser.lastName}
          </h5>
        </div>

        <form
          className="flex flex-row mx-2 w-[600px]"
          onSubmit={handleSubmitForm}
        >
          <input
            onChange={(e) => {
              setInputPost(e.target.value);
            }}
            type="text"
            placeholder="Write your post"
            className=" shadow appearance-none border rounded-3xl py-2 pl-4 mr-4 text-black w-full justify-between "
          />
          <button
            type="submit"
            className="bg-white rounded-lg my-2 px-4 text-teal-400 text-xl font-bold"
          >
            Post
          </button>
        </form>
      </div>
      <div>
        {/* <h3 className="">Forum</h3> */}
        {/* {showPost?.map((item) => (
          <h5 className="p-2 text-left text-3xl font-black rounded-md text-white ">
            {item.post}
          </h5>
        ))} */}
      </div>
    </div>
  );
}
