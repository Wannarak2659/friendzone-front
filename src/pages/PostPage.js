import React from "react";
import PostForm from "../feature/auth/PostForm";
import GroupImage from "../group/GroupImage";
import GroupName from "../group/GroupName";
import { useParams } from "react-router-dom";
import useGroup from "../hooks/useGroup";
import ChatAuthor from "../chat/ChatAuthor";

// import { Link } from "react-router-dom";

export default function PostPage() {
  // const { authenticatedUser } = useAuth();
  // const [showPost, setShowPost] = useState();

  const { currentGroup } = useGroup();

  // const params = useParams();

  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();
  //   const res = await authApi.createPost({
  //     groupId: params.id,
  //     title: "Let go to Pattaya this weekend",
  //   });
  //   console.log("post !!!");
  // };

  return (
    <>
      <div className="flex flex-col">
        {/* group profile */}
        <div className="flex flex-row gap-8 px-2 sm:px-4 py-2.5 mx-24 my-12">
          <div className=" w-5/12 border-4 justify-start border-white rounded-lg shadow ">
            <div className="flex flex-col items-center pb-10 p-2">
              <GroupImage image={currentGroup.groupImage} />
              <GroupName />
            </div>
          </div>
          {/* end group profile */}
          <div>
            <PostForm className="w-1/3" />
          </div>
        </div>
        <hr className="bg-white border-2 mx-24" />

        <div className="flex flex-row border-white border-4 rounded-lg shadow justify-between p-2 mb-8 mx-24 my-8">
          {/* <h1 className=" px-2  mx-24 my-4 text-5xl">Chat</h1>
          <ChatAuthor /> */}
        </div>
      </div>
    </>
  );
}
