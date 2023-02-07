import React from "react";

function RegisterForm() {
  return (
    <div className="relative p-4 flex-auto">
      <form className="rounded-3xl px-16 pt-6 pb-8 w-full">
        <label className="block text-black font-bold mb-1">First Name</label>
        <input
          placeholder=" First Name"
          name="firstName"
          className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
        />
        <label className="block text-black font-bold mb-1">Last Name</label>
        <input
          placeholder="Last Name"
          name="lastName"
          className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-2 text-black"
        />

        <label className="block text-black text-sm font-bold mb-1">
          E-mail
        </label>
        <input
          placeholder=" email@address.com"
          className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-1 text-black"
        />
        <label className="block text-black text-sm font-bold mb-1">
          Password
        </label>
        <input
          placeholder=" Minimum 8 characters"
          className="shadow appearance-none border rounded-3xl w-full my-2 py-2 px-1 text-black"
        />
        <label className="block text-black text-sm font-bold mb-1">
          Confirm Password
        </label>
        <input
          placeholder=" Confirm Your Password"
          className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
        />
        <span>Already have an account?</span>
      </form>
    </div>
  );
}

export default RegisterForm;
