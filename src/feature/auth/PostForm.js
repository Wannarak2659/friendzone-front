import React, { useState } from "react";
import UserImage from "../../component/UserImage";
import useAuth from "../../hooks/useAuth";
import Dropdown from "../../component/Dropdown";
import * as authApi from "../../apis/auth-api";
import { useParams } from "react-router-dom";

export default function PostForm() {
  const { authenticatedUser } = useAuth();

  const [inputPost, setInputPost] = useState();
  const [showPost, setShowPost] = useState();

  const params = useParams();
  console.log("group in ------> ", params.id);

  // useEffect(() => {
  //   const fetchCreatePost = async () => {
  //     const res = await authApi.createPost();

  //     console.log("---------> ", res.data.posts);
  //     setShowPost(res.data);
  //   };
  //   fetchCreatePost();
  // }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const res = await authApi.createPost({
      groupId: params.id,
      title: inputPost, /////
    });
  };

  // const handleClickEdit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(); // #convert content type to FormData
  //   formData.append("groupId", firstName);
  //   formData.append("lastName", lastName);

  //   const res = await userApi.updateProfile(formData);
  //   setAuthenticatedUser(res.data.newUser);
  //   onSuccess();
  //   toast.success("Profile Successfully updated");
  // };

  return (
    <div>
      <div className="">
        <div className="flex flex-row  border-white border-4 rounded-lg shadow justify-between p-2 mb-8">
          <UserImage src={authenticatedUser.profileImage} size="50" />
          <h5 className="my-2 text-xl font-bold text-white ">
            {authenticatedUser.firstName} {authenticatedUser.lastName}
          </h5>
          <Dropdown className="" />
        </div>

        <form className="mx-2" onSubmit={handleSubmitForm}>
          <input
            onChange={(e) => {
              setInputPost(e.target.value);
            }}
            type="text"
            placeholder="Write your post"
            className="shadow appearance-none border rounded-3xl py-2 pl-4 mr-4 text-black "
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
        {showPost?.map((item) => (
          <div className="flex flex-row w-full border-white border-4 rounded-lg shadow justify-between p-2 mb-8 bg-gray-400">
            <h5 className="p-2 text-left text-3xl font-black rounded-md text-white ">
              {item.post}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
