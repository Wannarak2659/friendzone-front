import { React, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const [emailLogin, setEmailLogin] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLoginForm = async (e) => {
    try {
      e.preventDefault();
      await login(emailLogin, password);
      toast.success("Success login");
    } catch (err) {
      // console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="relative p-4 flex-auto" onSubmit={handleLoginForm}>
      <form className="rounded-3xl px-16 pt-6 pb-8 w-full">
        <label className="block text-black text-sm font-bold mb-1">
          E-mail
        </label>
        <input
          type="text"
          placeholder="email@address.com"
          value={emailLogin}
          onChange={(e) => setEmailLogin(e.target.value)}
          className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
        />
        <label className="block text-black text-sm font-bold mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded-3xl w-full py-2 px-1 text-black"
        />
        <button
          className="text-white bg-teal-400 font-bold uppercase text-sm px-6 py-3 rounded shadow "
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
