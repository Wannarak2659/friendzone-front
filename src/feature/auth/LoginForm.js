import React from "react";

function LoginForm() {
  return (
    <div className="relative p-4 flex-auto">
      <form className="rounded-3xl px-16 pt-6 pb-8 w-full">
        <label className="block text-black text-sm font-bold mb-1">
          E-mail
        </label>
        <input
          type="text"
          placeholder="email@address.com"
          className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
        />
        <label className="block text-black text-sm font-bold mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Your Password"
          className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
        />
      </form>
    </div>
  );
}

export default LoginForm;
