import React, { useState } from "react";
// import UserImage from "../../component/UserImage";
// import authenticatedUser from "../../contexts/AuthContext";
import * as userApi from "../../apis/auth-api";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

function EditProfile({ onSuccess, updateProfileUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [editImage, setEditImage] = useState(null);
  const { updateProfile, setAuthenticatedUser } = useAuth();
  // const { profileImage } = authenticatedUser;

  // # handle edit profile
  const handleClickEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // #convert content type to FormData
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("profileImage", editImage);
    //# append = add key: value to formData
    const res = await userApi.updateProfile(formData);
    setAuthenticatedUser(res.data.newUser);
    onSuccess();
    toast.success("Profile Successfully updated");
  };

  return (
    <>
      <div className="relative p-4 flex-auto">
        <form
          className="rounded-3xl px-16 pt-6 pb-8 w-full"
          onSubmit={handleClickEdit}
        >
          <label className="block text-black font-bold mb-1">First Name</label>
          <input
            type="text"
            placeholder=" First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
          />

          <label className="block text-black font-bold mb-1">Last Name</label>
          <input
            type="text"
            placeholder=" Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
          />

          <label className="block text-black text-sm font-bold mb-1">
            E-mail
          </label>
          <input
            type="text"
            placeholder=" email@address.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-1 text-black"
          />
          <label className="block text-black text-sm font-bold mb-1">
            Profile Picture
          </label>
          <input
            type="file"
            name="editImage"
            onChange={(e) => {
              // e.preventDefault();
              setEditImage(e.target.files[0]);
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

export default EditProfile;
