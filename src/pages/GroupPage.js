import { getAllGroup } from "../apis/auth-api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGroup from "../hooks/useGroup";
import GroupCard from "../feature/auth/GroupCard";
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
          <button className="p-4 bg-white text-center text-xl font-black rounded-3xl text-teal-400">
            Create Group
          </button>
        </Link>
      </div>

      <div>
        <GroupCard />
        {/* End group */}
      </div>
    </>
  );
}

export default GroupPage;
