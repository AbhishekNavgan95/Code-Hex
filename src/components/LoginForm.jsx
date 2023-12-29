import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const [showPass, setShowPass] = useState(false);

  function inputHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    toast.success("Logged in successfully");
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mt-3 mb-2 text-white">
            Enter Email <sup>*</sup>
          </label>
          <input
            required
            className="w-full py-2 px-3 text-xl bg-gray-800 text-white rounded-lg focus:outline-none"
            type="email"
            onChange={inputHandler}
            name="email"
            value={FormData.email}
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mt-3 mb-2 text-white" htmlFor="email">
            Enter Password
          </label>
          <div className="flex items-center">
            <input
              required
              className="w-full py-2 px-3 text-xl rounded-s-lg bg-gray-800 text-white focus:outline-none "
              type={showPass === true ? "text" : "password"}
              onChange={inputHandler}
              name="pass"
              value={FormData.pass}
              id="pass"
            />
            <span
              className="px-3 py-3 text-xl bg-gray-800 text-white hover:cursor-pointer rounded-e-lg"
              onClick={() => {
                setShowPass((prev) => !prev);
              }}
            >
              {!(showPass === true) ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <p className="text-red-800 mt-1 text-end select-none hover:cursor-pointer">
            Forgot password?
          </p>
        </div>
        <div className="">
          <button className="mt-4 w-full bg-red-400 hover:bg-red-500 tarnsition-color duration-300 py-2 text-white rounded-lg">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
