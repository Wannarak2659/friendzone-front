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
      <div className="mx-16 flex flex-row gap-24 p-4">
        {showGroup?.map((item) => (
          <div
            key={item.id}
            className="max-w-sm border border-gray-200 rounded-lg shadow"
          >
            <div className="bg-white rounded-tl-md max-w-sm mb-5">
              <img src={item.groupImage} size="400" alt="groupImage" />
              <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {item.name}
                </h5>

                <p className="font-normal text-gray-700 mb-3">{item.detail}</p>

                <Link
                  to={`/group/${item.id}`}
                  onClick={() => setCurrentGroup(item)}
                  // state={item}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
                >
                  More...
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* End group */}
      </div>
    </>
  );
}
