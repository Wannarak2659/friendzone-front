import React, { useEffect, useState } from "react";
import PostForm from "../feature/auth/PostForm";
import GroupImage from "../group/GroupImage";
import GroupName from "../group/GroupName";
// import { useParams } from "react-router-dom";
// import useGroup from "../hooks/useGroup";
import * as authApi from "../apis/auth-api";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../component/Dropdown";
import GroupDetail from "../group/GroupDetail";
import { Link } from "react-router-dom";
import EditGroupForm from "../feature/auth/EditGroupForm";
import UserImage from "../component/UserImage";
import useAuth from "../hooks/useAuth";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function PostPage() {
  const { authenticatedUser } = useAuth();
  const params = useParams();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [showPost, setShowPost] = useState();
  const [currentGroup, setCurrentGroup] = useState(params.id);
  const [showEditGroupModal, setShowEditGroupModal] = useState(false);

  useEffect(() => {
    const fetchGetGroup = async () => {
      const res = await authApi.getGroupById(params.id);
      setCurrentGroup(res.data);
    };
    fetchGetGroup();
  }, [params.id]);

  useEffect(() => {
    const fetchGetPost = async () => {
      const res = await authApi.getAllPost(params.id);

      //console.log("res ---------> ", res.data);
      setShowPost(res.data);
    };
    fetchGetPost();
  }, [params.id]);
  console.log("param ---------> ", params.id);
  console.log("currentGroup ===== ", currentGroup);
  return (
    <>
      <div className="flex flex-col mx-24">
        {/* group profile */}
        <div className="flex flex-row gap-8 px-2 sm:px-4 py-2.5 mx-24 my-12">
          <div className="border-4 justify-start border-white rounded-lg shadow ">
            <div className="flex flex-col items-center pb-10 p-2">
              <GroupImage image={currentGroup.groupImage} />
              <GroupName name={currentGroup.name} />
              <GroupDetail detail={currentGroup.detail} />

              <div className="p-5">
                <Link
                  to="#"
                  onClick={() => setShowEditGroupModal(true)}
                  className="inline-flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
                >
                  Edit Group
                </Link>

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

                          {/* Login form */}
                          <EditGroupForm
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
            <PostForm />
          </div>
        </div>
        <hr className="bg-white border-2 mx-24" />

        <h1 className="mx-32 text-2xl mt-8 font-black">CHAT BOX</h1>

        <div className="flex flex-col border-white border-4 rounded-lg shadow p-8 mx-32 my-8 text-lg justify-between w-120">
          {showPost?.map((item) => (
            <div className=" flex flex-row items-center ">
              <Link to="">
                <UserImage src={item.User.profileImage} size="40" />
              </Link>
              <div className="p-2 px-4 my-2 mx-2 flex ">
                {item.User.firstName} {item.User.lastName}: {item.title}
              </div>
              {/* {item.id === authenticatedUser.id && ( */}
              <div className="flex justify-end">
                <ModeEditIcon />
                {/* <Dropdown postId={item.id} /> */}
              </div>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
