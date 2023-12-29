import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Tamplate = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="bg-gray-950">
      <div className="flex max-w-[1200px] overflow-x-hidden mx-auto gap-10 px-3 h-[95vh]  justify-between items-center">
        <div className="px-3 flex flex-col gap-3 w-[550px]">
          <h2 className="text-5xl font-bold text-white">{title}</h2>
          <p className="text-2xl flex flex-col text-gray-400">
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
          {formtype === "Signup" ? (
            <SignupForm  setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm  setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex justify-center items-center gap-4 my-10">
            <div className="h-[2px] w-full bg-gray-600"></div>
            <div className="text-xl text-white">OR</div>
            <div className="h-[2px] w-full bg-gray-600"></div>
          </div>

          <button className="bg-gray-800 border py-2 text-white rounded-lg hover:bg-red-500 transition-color duration-300">
            Sign up with google
          </button>
        </div>

        <div className="relative hidden lg:flex mr-1">
          <div className="w-[500px] h-[550px] border-4 shadow-2xl rounded-lg border-white absolute left-[-20px] top-[20px]"></div>
          <img
            className="w-[500px] h-[550px] border-2 shadow-2xl rounded-lg border-white relative z-[2]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Tamplate;
