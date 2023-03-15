import React from "react";
import useGroup from "../hooks/useGroup";

export default function GroupName() {
  const { currentGroup } = useGroup();

  return (
    <div className="text-center my-2">
      <h5 className="text-white text-4xl font-bold tracking-tight">
        {currentGroup?.name}
      </h5>
    </div>
  );
}
