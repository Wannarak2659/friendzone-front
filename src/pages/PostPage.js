import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../feature/auth/PostForm";
import GroupImage from "../group/GroupImage";
import GroupName from "../group/GroupName";
import GroupDetail from "../group/GroupDetail";
// import { useParams } from "react-router-dom";
// import useGroup from "../hooks/useGroup";
import * as authApi from "../apis/auth-api";

// import Dropdown from "../component/Dropdown";
import { Link } from "react-router-dom";
import EditGroupForm from "../feature/auth/EditGroupForm";
import UserImage from "../component/UserImage";
import useAuth from "../hooks/useAuth";
import Delete from "../assets/Icons/DeleteIcon";
import EditIcon from "../assets/Icons/EditIcon";
import GroupCard from "../feature/auth/GroupCard";

export default function PostPage() {
  const { authenticatedUser } = useAuth();
  const params = useParams();
  // const { currentGroup } = useGroup();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [showPost, setShowPost] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(params.id);
  const [showEditGroupModal, setShowEditGroupModal] = useState(false);
  const [inputPost, setInputPost] = useState();
  const [postNewText, setPostNewText] = useState();
  const [postId, setPostId] = useState();

  useEffect(() => {
    const fetchGetGroup = async () => {
      const res = await authApi.getGroupById(params.id);
      setCurrentGroup(res.data);
      // console.log("The current group is: ", currentGroup);
      //console.log(params);
    };
    fetchGetGroup();
  }, [params.id]);

  useEffect(() => {
    const fetchGetPost = async () => {
      const res = await authApi.getAllPost(params.id);
      setShowPost(res.data);
    };
    fetchGetPost();
  }, [params.id]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const res = await authApi.createPost({
      groupId: params.id,
      title: inputPost,
    });

    setShowPost([res.data, ...showPost]);
  };

  const handleEditPost = async (e, id) => {
    e.preventDefault();
    setToggleEdit(true);
    setPostId(id);
  };

  const handleEdit = async (e) => {
    setPostNewText(e.target.value);
  };
  // const handleOnKeyDown = async (e) => {};

  const handleEditSave = async (e, id, idx) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", postNewText);
    const res = await authApi.editPost(id, formData);
    const newShowPost = structuredClone(showPost);
    newShowPost[idx].title = postNewText;
    setShowPost(newShowPost);
    // const posts = await authApi.getAllPost(params.id);
    // setShowPost(posts.data);
    setToggleEdit(false);
    setPostId(null);
  };
  const handleEditCancel = async (e) => {
    setToggleEdit(false);
    setPostId(null);
  };

  const handleClickDelete = async (e, id) => {
    e.preventDefault();
    const res = await authApi.deletePost(id);
    const posts = await authApi.getAllPost(params.id);
    setShowPost(posts.data);
  };

  return (
    <>
      <div className="flex flex-col mx-24">
        {/* group profile */}
        <div className="flex flex-row gap-8 px-2 sm:px-4 py-2.5 mx-24 my-12">
          <div className="border-4 justify-start border-white rounded-lg shadow ">
            <div className="flex flex-col items-center pb-10 p-2">
              {/* <GroupCard /> */}
              <GroupImage image={currentGroup.groupImage} />
              <GroupName name={currentGroup.name} />
              <GroupDetail detail={currentGroup.detail} />
              <div className="p-5">
                {/* {params.Group?.id === authenticatedUser.id && ( */}
                <Link
                  to="#"
                  onClick={() => setShowEditGroupModal(true)}
                  className="inline-flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
                >
                  Edit Group
                </Link>
                {/* )} */}

                {/* ////////////// */}
                {showEditGroupModal ? (
                  <>
                    {/* Modal button */}
                    <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className=" text-black text-xl font=semibold">
                              Edit Group
                            </h3>

                            {/* Close button */}
                            <button
                              className="bg-transparent border-0 text-black float-right"
                              onClick={() => setShowEditGroupModal(false)}
                            >
                              <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                                x
                              </span>
                            </button>
                          </div>

                          {/* EditGroup form */}
                          <EditGroupForm
                            groupId={params.id}
                            onSuccess={() => setShowEditGroupModal(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          {/* end group profile */}
          <div className="w-100">
            <PostForm
              inputPost={inputPost}
              // showPost={showPost}
              setInputPost={setInputPost}
              handleSubmitForm={handleSubmitForm}
            />
          </div>
        </div>
        <hr className="bg-white border-2 mx-24" />

        <h1 className="mx-32 text-2xl mt-8 font-black">CHAT BOX</h1>

        <div className="flex flex-col border-white border-4 rounded-lg shadow p-8 mx-32 my-8 text-lg justify-between w-120">
          {showPost?.map((item, idx) => (
            <div
              key={item.id}
              className=" flex flex-row items-center justify-between "
            >
              <div className="flex justify-start">
                <Link to="" className="flex items-center">
                  <UserImage src={item?.User?.profileImage} size="48" />
                </Link>
                {toggleEdit === true &&
                  item.User?.id === authenticatedUser.id &&
                  item.id === postId && (
                    <div className="p-2 px-4 my-2 mx-2 flex ">
                      {item.User?.firstName} {item.User?.lastName}:
                      <input
                        className="text-black mx-2 pl-2 w-80 h-8"
                        type="text"
                        defaultValue={item?.title}
                        onChange={(e) => handleEdit(e)}
                        // onKeyDown={handleOnKeyDown}
                      />
                      <button
                        className="mx-2 text-sm"
                        onClick={(e) => handleEditSave(e, item.id, idx)}
                      >
                        Save
                      </button>
                      <button
                        className="text-sm"
                        onClick={(e) => handleEditCancel(e)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                {item.id !== postId && (
                  <div className="p-2 px-4 my-2 mx-2 flex text-bold">
                    {item.User?.firstName} {item.User?.lastName}: {item?.title}
                    {/* CHAT:{item?.title} */}
                  </div>
                )}
              </div>
              {item.User?.id === authenticatedUser.id && (
                <div className="flex justify-end">
                  <button onClick={(e) => handleEditPost(e, item.id)}>
                    <EditIcon />
                  </button>
                  <button onClick={(e) => handleClickDelete(e, item.id)}>
                    <Delete />
                  </button>
                  {/* <Dropdown postId={item.id} /> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
