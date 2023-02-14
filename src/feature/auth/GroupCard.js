// import { Link } from "react-router-dom";
import { getAllGroup } from "../../apis/auth-api";
import React, { useEffect, useState } from "react";

export default function GroupCard({ size }) {
  const [showGroup, setShowGroup] = useState();

  useEffect(() => {
    const fetchCreateGroup = async () => {
      const res = await getAllGroup();
      setShowGroup(res.data);
    };
    fetchCreateGroup();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mx-2" width={size} height={size}>
        {showGroup?.map((item) => (
          <div className="max-w-sm border border-gray-200 rounded-lg shadow">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <img
                className="rounded-t-lg"
                src={item.groupImage}
                size="400"
                alt="groupImage"
              />
              <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {item.name}
                </h5>
                {/* <span className="text-sm text-gray-400 my-1">80 Members</span> */}
                <p className="font-normal text-gray-700 mb-3">{item.detail}</p>

                {/* <Link
                  to="/post"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
                >
                  More...
                </Link> */}
              </div>
            </div>
          </div>
        ))}

        {/* End group */}
      </div>
    </>
  );
}
