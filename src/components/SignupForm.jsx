import React from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
    confirmPass: "",
    accType: "",
  });

  const [accType, setAccType] = useState("student");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

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

    if (formData.pass !== formData.confirmPass) {
      toast.error("password does not match!!");
      return;
    }

    toast.success("Signed up successfully");

    const accountData = {
      ...formData,
      accType,
    };

    console.log(accountData);

    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="bg-gray-800 px-2 rounded-full py-2 text-white w-max my-3 flex gap-2">
        <button
          onClick={() => setAccType("student")}
          className={
            accType === "student"
              ? "px-7 py-2  bg-gray-950 rounded-full hover:bg-gray-900 transition-color duration-300 "
              : "px-7 py-2  bg-gray-800 rounded-full hover:bg-gray-900 transition-color duration-300 "
          }
        >
          Student
        </button>
        <button
          onClick={() => setAccType("intructor")}
          className={
            accType === "intructor"
              ? "px-7 py-2 bg-gray-950 rounded-full hover:bg-gray-950 transition-color duration-300 "
              : "px-7 py-2 bg-gray-800 rounded-full hover:bg-gray-950 transition-color duration-300 "
          }
        >
          Intructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col">
            <label htmlFor="fName" className="font-semibold my-3 text-white">
              First Name
            </label>
            <input
              required
              className="w-full py-2 px-3 text-xl bg-gray-800 text-white rounded-lg focus:outline-none"
              type="text"
              onChange={inputHandler}
              name="fName"
              value={FormData.fName}
              id="fName"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lName" className="font-semibold my-3 text-white">
              Last Name
            </label>
            <input
              required
              className="w-full py-2 px-3 text-xl bg-gray-800 text-white rounded-lg focus:outline-none"
              type="text"
              onChange={inputHandler}
              name="lName"
              value={FormData.lName}
              id="lName"
            />
          </div>
        </div>
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
        <div className="flex gap-4 my-3">
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold  text-white"
              htmlFor="pass"
            >
              Create Password
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
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold  text-white"
              htmlFor="confirmPass"
            >
              Confirm Password
            </label>
            <div className="flex items-center">
              <input
                required
                className="w-full py-2 px-3 text-xl rounded-s-lg bg-gray-800 text-white focus:outline-none "
                type={showConfirmPass === true ? "text" : "password"}
                onChange={inputHandler}
                name="confirmPass"
                value={FormData.pass}
                id="confirmPass"
              />
              <span
                className="px-3 py-3 text-xl bg-gray-800 text-white hover:cursor-pointer rounded-e-lg"
                onClick={() => {
                  setShowConfirmPass((prev) => !prev);
                }}
              >
                {!(showConfirmPass === true) ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <button className="mt-4 w-full bg-red-400 hover:bg-red-500 tarnsition-color duration-300 py-2 text-white rounded-lg">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
