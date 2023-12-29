import React from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="bg-gray-950">
      <div className="flex justify-between px-4 items-center md:max-w-[1200px] mx-auto py-4">
        <Link to="/">
          <div>
            <h2 className="font-bold text-red-700 text-3xl">Code-Hex</h2>
          </div>
        </Link>

        <nav className=" gap-5 text-xl hidden md:flex ">
          <NavLink to="/">
            <h4 className="text-white transition-color duration-300 hover:text-red-600">
              Home
            </h4>
          </NavLink>
          <NavLink to="/about">
            <h4 className="text-white transition-color duration-300 hover:text-red-600">
              About
            </h4>
          </NavLink>
          <NavLink to="/contact">
            <h4 className="text-white transition-color duration-300 hover:text-red-600">
              Contact
            </h4>
          </NavLink>
        </nav>

        {isLoggedIn === true ? (
          <div className="text-white flex gap-5 text-md">
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("logged out");
                }}
                className=" px-3 py-1 rounded-md shadow-sm bg-red-700 shadow-white"
              >
                Sign out
              </button>
            </Link>
            <Link to="/dashboard">
              <button className=" px-3 py-1 rounded-md shadow-sm bg-red-700 shadow-white">
                Dashboard
              </button>
            </Link>
          </div>
        ) : (
          <div className="text-white flex gap-5 text-md">
            <Link to="login">
              <button className="px-3 py-1 rounded-md shadow-sm bg-red-700 shadow-white">
                Log in
              </button>
            </Link>
            <Link to="signup">
              <button className=" px-3 py-1 rounded-md shadow-sm bg-red-700 shadow-white">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
