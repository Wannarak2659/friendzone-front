import { getAllGroup } from "../apis/auth-api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGroup from "../hooks/useGroup";
// import GroupCard from "../feature/auth/GroupCard";

function GroupPage() {
  //state to collect data from BE

  //function to set response to state

  //use effect call fuction

  //map state

  const [showGroup, setShowGroup] = useState();
  const { setCurrentGroup } = useGroup();

  useEffect(() => {
    const fetchCreateGroup = async () => {
      const res = await getAllGroup();
      setShowGroup(res.data);
    };
    fetchCreateGroup();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between my-4 mx-16">
        <h1 className="p-3 text-center text-4xl font-black rounded-md text-white ">
          Discover Group
        </h1>

        <Link to="/create" className="flex items-center">
          <button className="p-3 bg-white text-center text-xl font-black rounded-3xl text-teal-400">
            Create Group
          </button>
        </Link>
      </div>

      <div className="mx-8 flex flex-row">
        {showGroup?.map((item) => (
          <div
            key={item.id}
            className="max-w-sm border border-gray-200 rounded-lg shadow"
          >
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
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

export default GroupPage;
