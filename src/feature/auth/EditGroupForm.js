import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editGroup } from "../../apis/auth-api";
import * as groupApi from "../../apis/auth-api";
import { toast } from "react-toastify";
// import useAuth from "../../hooks/useAuth";
import useGroup from "../../hooks/useGroup";

const initialInput = {
  name: "",
  detail: "",
};

export default function EditGroupForm({ onSuccess, groupId }) {
  const [input, setInput] = useState(initialInput);
  const [groupImage, setGroupImage] = useState(null);
  const { currentGroup, setCurrentGroup } = useGroup();
  const navigate = useNavigate();
  console.log("currentGroup", currentGroup);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(); // #convert content type to FormData
      formData.append("name", input.name);
      formData.append("detail", input.detail);
      formData.append("groupImage", groupImage);
      //# append = add key: value to formData
      const res = await editGroup(currentGroup.id, formData);
      // setCurrentGroup(updateGroup);
      // setInput(initialInput);

      toast.success("Group Successfully updated");
      onSuccess(false);
      navigate("/");
    } catch (err) {}
  };

  // useEffect(() => {});

  return (
    <>
      <div className="relative p-4 flex-auto">
        <form
          className="rounded-3xl px-16 pt-6 pb-8 w-full"
          onSubmit={handleSubmitForm}
        >
          <label className="block text-black font-bold mb-1">Group Name</label>
          <input
            type="text"
            placeholder=" Group Name"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
            className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
          />

          <label className="block text-black text-sm font-bold mb-1">
            Group Details
          </label>
          <input
            type="text"
            placeholder=" Details"
            name="detail"
            value={input.detail}
            onChange={handleChangeInput}
            className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-1 text-black"
          />
          <label className="block text-black text-sm font-bold mb-1">
            Group Picture
          </label>
          <input
            type="file"
            name="groupImage"
            value={input.groupImage}
            onChange={(e) => {
              // e.preventDefault();
              // console.log(e.target);
              setGroupImage(e.target.files[0]);
            }}
            className="text-gray-500 text-sm my-2 py-2 px-1 "
          />

          {/* Footer modal */}
          <div className="flex items-center justify-center p-6  rounded-b">
            <button
              className="text-white bg-teal-400 font-bold uppercase text-center px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mt-0 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
