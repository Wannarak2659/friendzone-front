import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
// import validateCreateGroup from "../validators/";
import * as authApi from "../apis/auth-api";

// import useAuth from "../hooks/useAuth";

// const initialInput = {
//   groupName: "",
//   groupDetail: "",
//   groupPhoto: "",
// };

export default function CreateGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [groupDetail, setGroupDetail] = useState("");
  const [groupPhoto, setGroupPhoto] = useState(null);

  useEffect(() => {
    const fetchCreateGroup = async () => {
      // add try{}
      const res = await authApi.createGroup();

      setGroupName(res.data.groups);
      setGroupDetail(res.data.groups);
      setGroupPhoto(res.data.groups);
    };
    fetchCreateGroup();
  }, []);

  const handleSubmitForm = async (e) => {
    // console.log(file);
    e.preventDefault();
    // const result = validateCreateGroup(input);
    const formData = new FormData();
    if (groupName) {
      formData.append("name", groupName);
    }
    if (groupDetail) {
      formData.append("detail", groupDetail);
    }

    formData.append("groupImage", groupPhoto);

    await authApi.createGroup(formData);

    toast.success("Group Successfully Created");
  };

  return (
    <>
      <div className="flex flex-col p-2 flex-aut mx-40">
        <form className="px-64 pt-6 pb-8" onSubmit={handleSubmitForm}>
          <h1 className="py-4 text-start text-4xl font-black rounded-md text-white ">
            Create Group
          </h1>
          <div>
            <label className="block text-xl font-bold">Group Name</label>
            <input
              type="text"
              placeholder="Group Name"
              name="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="shadow appearance-none border rounded-xl w-full my-2 py-2 px-2 text-black"
            />
            <label className="block text-xl font-bold">Group Details</label>
            <input
              type="text"
              placeholder=" Details"
              name="groupDetail"
              value={groupDetail}
              onChange={(e) => setGroupDetail(e.target.value)}
              className="shadow appearance-none border rounded-xl w-full h-200 my-2 py-4 px-1 text-black"
            />

            {/* <div
            className="flex justify-center"
            role="button"
            onClick={openFileInput}
            ref={ref}
          > */}
            <label
              className="block text-xl font-bold mb-1 "
              // onClick={openFileInput}
            >
              Group Photo
            </label>
            <input
              type="file"
              name="groupPhoto"
              // value={groupPhoto}
              // onChange={onChangeFileInput}
              onChange={(e) => {
                // e.preventDefault();
                setGroupPhoto(e.target.files[0]);
              }}
              // ref={ref}
              className="text-white text-xl my-2 py-2 px-1 "
            />

            {/* <button className="text-gray-500 bg-white font-bold uppercase px-16 py-1 rounded-3xl m-auto shadow  ">
              Upload Photo
            </button> */}

            {/* <img src={URL.createObjectURL(file)} className="" alt="group" /> */}
            {/* </div> */}
            <div className="mx-auto my-8">
              <button
                className="text-white bg-teal-400 font-bold uppercase px-16 py-1 rounded-3xl shadow  "
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
