import { useState } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import validateRegister from "../../validators/validate-register";
import * as authApi from "../../apis/auth-api";
import Input from "../../component/Input";
// import useLoading from "../../hooks/useLoading";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  // ## show error with red text that get from console

  // ## logic for handle register -binding state and input
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // ## logic for handle submit form
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      // console.dir(error);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input); // #command register to workbench
        setInput(initialInput);
        onClose();
        toast.success("Success register. Please log in");
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.response?.data.message);
      //# error response from log
    }
  };

  return (
    <div className="relative p-4 flex-auto">
      <form
        className="rounded-2xl px-16 pt-6 pb-8 w-full"
        onSubmit={handleSubmitForm}
      >
        <label className="block text-black text-sm font-bold mb-1">
          First Name
        </label>
        <Input
          placeholder=" First Name"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
        />

        <label className="block text-black text-sm font-bold mb-1">
          Last Name
        </label>
        <Input
          placeholder=" Last Name"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
        />

        <label className="block text-black text-sm font-bold mb-1">
          E-mail
        </label>
        <Input
          placeholder=" email@address.com"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          error={error.email}
        />
        <label className="block text-black text-sm font-bold mb-1">
          Password
        </label>
        <Input
          type="password"
          placeholder=" Minimum 8 characters"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
        />
        <label className="block text-black text-sm font-bold mb-1">
          Confirm Password
        </label>
        <Input
          type="password"
          placeholder=" Confirm Your Password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
        />
        <span>Already have an account?</span>

        <button
          className="text-white bg-teal-400 font-bold uppercase text-center px-6 py-3 mt-8 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none  invalid:border-red-500 "
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
