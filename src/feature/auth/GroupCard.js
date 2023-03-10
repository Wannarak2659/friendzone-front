// import { Link } from "react-router-dom";
// import { getAllGroup } from "../../apis/auth-api";
import React, { useEffect, useState } from "react";
import useGroup from "../../hooks/useGroup";
import { Link } from "react-router-dom";
import * as authApi from "../../apis/auth-api";

export default function GroupCard({ size }) {
  const [showGroup, setShowGroup] = useState();
  const { setCurrentGroup } = useGroup();

  useEffect(() => {
    const fetchCreateGroup = async () => {
      const res = await authApi.getAllGroup();
      setShowGroup(res.data);
    };
    fetchCreateGroup();
  }, []);

  return (
    <>
      <div className="flex justify- arounded gap-2 w-full h-full">
        {showGroup?.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow bg-white max-w-sm mb-5 w-48 h-60 mx-2 flex flex-wrap"
          >
            {/* <div className="bg-white rounded-tl-md max-w-sm mb-5 w-full h-120"> */}
            <img
              src={item.groupImage}
              size="200"
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
              <Link
                to={`/group/${item.id}`}
                onClick={() => setCurrentGroup(item)}
                // state={item}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg my-2 "
              >
                More...
              </Link>
            </div>
          </div>
        ))}

        {/* End group */}
      </div>
    </>
  );
}
