import React from "react";

function CreateGroupPage() {
  return (
    <>
      <div className="flex flex-col p-2 flex-auto">
        <form className="rounded-3xl px-64 pt-6 pb-8 ">
          <h1 className="py-4 text-start text-4xl font-black rounded-md text-white ">
            Create Group
          </h1>
          <label className="block text-xl font-bold" />
          <input
            placeholder="Group Name"
            className="shadow appearance-none border rounded-xl w-full my-2 py-2 px-1 text-black"
          />
          <input
            placeholder="Group Details"
            className="shadow appearance-none border rounded-xl w-full my-2 py-4 px-1 text-black"
          />
        </form>
        <div className="flex justify-center">
          <button
            className="text-gray-500 bg-white font-bold uppercase px-16 py-1 rounded-3xl m-auto shadow  "
            type="button"
          >
            Upload Photo
          </button>
        </div>
        <div className="mx-auto my-8 justify-center">
          <button
            className="text-whote bg-teal-400 font-bold uppercase px-16 py-1 rounded-3xl shadow  "
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateGroupPage;
