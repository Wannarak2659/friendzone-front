import React from "react";

export default function GroupDetail() {
  return (
    <div>
      <span className="text-sm text-gray-400 my-1">20 Members</span>
      <p className="font-normal text-gray-700 mb-3">
        The journey of a thousand miles begins with a single step with a good
        companion.
      </p>
      <div className="p-5">
        <Link
          to="/post"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg"
        >
          More...
        </Link>
      </div>
    </div>
  );
}
