import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";



const Login = ({ LoginPopup, setLoginPopup }) => {
  return (
    <>
    { LoginPopup&&(
    <div className="Login">
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-[420px] bg-white  font-semibold rounded-xl">
        <div className="absolute left-[370px] mx-1 py-2">
          <IoCloseOutline
            className="text-2xl cursor-pointer "
            onClick={() => setLoginPopup(false)}
          />
        </div>
        <form action="">
          <h1 className="flex justify-center my-5 font-bold text-[36px]">
          Sign In
          </h1>
          <div className="flex flex-col gap-3 mx-8 ">
            <div className="flex flex-col-1 gap-4 bg-gray-200 h-11 rounded-lg hover:border border-black duration-200">
              <input
                type="text"
                placeholder="username"
                className="w-80  bg-transparent outline-none mx-3  placeholder:text-gray-500 "
              />
              <FaUser className="mt-4 relative right-2 " />
            </div>
           
            <div className="flex flex-col-1 gap-4 bg-gray-200  h-11 rounded-lg hover:border border-black duration-200 mb-2">
              <input
                type="password"
                placeholder="password "
                className="w-80 bg-transparent outline-none ml-3 placeholder:text-gray-500 "
              />
              <FaLock className="mt-4  relative right-2" />
            </div>
            {/* <div className="flex flex-col-1 gap-4 bg-gray-200  h-11 rounded-lg hover:border border-black duration-200">
              <input
                type="numbers"
                placeholder="phone number "
                className="w-80 bg-transparent outline-none ml-3 placeholder:text-gray-500 "
              />
              <IoCall className="mt-4  relative right-2" />
            </div> */}
          </div>
          <div className="flex justify-center mx-4 mt-2">
            {/* <label>
              <input type="checkbox" />
              Remember me
            </label> */}
            <a href="#" className="hover:underline text-blue-700 font-bold">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-slate-600 rounded-full ml-28 w-40 h-10 relative items-center  mt-4 text-white font-bold shadow-md hover:scale-105 duration-200"
          >
            Sign In
          </button>
          <div className="flex justify-center mt-4 mb-10 ">
            <p>
              Don't have an account?{" "}
              <a href="#" className="font-bold text-blue-700 hover:underline">
              Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
    )}
    </>
  );
};


export default Login;