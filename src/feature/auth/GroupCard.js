// import { Link } from "react-router-dom";
// import { getAllGroup } from "../../apis/auth-api";
import React, { useEffect, useState } from "react";
import useGroup from "../../hooks/useGroup";
import { Link, useParams } from "react-router-dom";
import * as authApi from "../../apis/auth-api";
import EditGroupForm from "./EditGroupForm";
import useAuth from "../../hooks/useAuth";

export default function GroupCard({ size, group }) {
  const params = useParams();
  const { authenticatedUser } = useAuth();
  const [showGroup, setShowGroup] = useState();
  const { currentGroup, setCurrentGroup } = useGroup();
  const [showEditGroupModal, setShowEditGroupModal] = useState(false);
  const [groupId, setGroupId] = useState();

  useEffect(() => {
    const fetchCreateGroup = async () => {
      // console.log("user info: ", authenticatedUser);
      // console.log("group info: ", currentGroup);

      const res = await authApi.getAllGroup();
      // console.log("data", res.data);
      setShowGroup(res.data);
    };
    fetchCreateGroup();
  }, []);

  // const handlEditClick = async (e, showModal) => {
  //   console.log(e.target.id);
  //   setGroupId(e.target.id);
  //   setShowEditGroupModal(showModal);
  // };
  return (
    <>
      {/* <div className="flex justify- arounded gap-2 w-full h-full"> */}
      {showGroup?.map((item) => (
        <div
          key={item.id}
          className="rounded-lg shadow bg-white max-w-sm mb-5 w-64 h-72 mx-2"
        >
          {/* <div className="bg-white rounded-tl-md max-w-sm mb-5 w-full h-120"> */}
          <img
            src={item.groupImage}
            size="400"
            alt="groupImage"
            className="w-full h-full object-cover rounded-t-lg"
          />
          {/* </div> */}
          <div className="bg-white w-full px-2 mb-2 rounded-b-lg ">
            <div className="text-gray-900 font-semibold text-xl tracking-tight mb-2 w-full h-8 ">
              {item.name}
            </div>
            <div className="text-sm text-gray-700  w-full h-8">
              {item.detail}
            </div>
            <div className="flex justify-between">
              <Link
                to={`/group/${item.id}`}
                onClick={() => setCurrentGroup(item)}
                // state={item}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg my-2 "
              >
                More...
              </Link>
              {/* Edit Group Form */}
              {/* <div className="p-5"> */}
              {/* {currentGroup.id === authenticatedUser.id && ( */}
              {/* <Link
                // id={item.id}
                to="#"
                onClick={(e) => handlEditClick(e, true)}
                className="inline-flex justify-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg my-2"
              >
                Edit Group
              </Link> */}
              {/* )} */}
              {/* ////////////// */}
              {/* {showEditGroupModal ? ( */}
              {/* <>
                 
                  <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                          <h3 className=" text-black text-xl font=semibold">
                            Edit Group
                          </h3>

                         
                          <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={(e) => handlEditClick(e, false)}
                          >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                              x
                            </span>
                          </button>
                        </div>

                      
                        <EditGroupForm
                          groupId={groupId}
                          onSuccess={(e) => handlEditClick(e, false)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div> */}
              {/* End Edit Group Form */}
            </div>
          </div>
        </div>
      ))}

      {/* End group */}
      {/* </div> */}
    </>
  );
}
