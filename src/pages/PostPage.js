import React from "react";
import PostForm from "../post/PostForm";
import GroupImage from "../group/GroupImage";
import GroupName from "../group/GroupName";
import { useParams } from "react-router-dom";
import useGroup from "../hooks/useGroup";

// import { Link } from "react-router-dom";

function PostPage() {
  const { currentGroup } = useGroup();
  const params = useParams();
  console.log(params.id);

  // const [showModal, setShowModal] = useState(false);
  // const handleOnClose = () => setShowModal(false);
  return (
    <>
      <div className="flex flex-row justify-between m-12 mx-24">
        <h1 className="p-3 text-center font-black rounded-md text-white ">
          GROUP NAME
        </h1>
      </div>

      {/* group profile */}
      <div className="flex flex-row gap-8 px-2 sm:px-4 py-2.5 mx-24 my-12">
        {/* --------------col -1 */}
        <div className=" w-4/12 border-4 justify-start border-white rounded-lg shadow ">
          <div className="flex flex-col items-center pb-10">
            <GroupImage image={currentGroup.groupImage} />
            <GroupName />
          </div>
        </div>
        {/* end group profile */}

        <PostForm />
      </div>
    </>
  );
}

export default PostPage;
