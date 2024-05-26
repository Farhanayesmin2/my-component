"use client";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <div className="bg-white border-2 border-r-teal-400 rounded-3xl shadow-xl w-full max-w-[768px] h-[480px] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="hidden md:flex items-center justify-center rounded-full bg-teal-500 text-white rounded-r-[40%] rounded-l-3xl h-full">
            <div className="flex flex-col items-center p-6 text-center">
              <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-4">
                Enter your personal details to use all of our site features
              </p>
              <button className="bg-white text-teal-500 py-2 px-4 rounded-full">
                SignUp
              </button>
            </div>
          </div>
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <form className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold mb-4 text-teal-600">Login Account</h1>
              <span className="text-gray-600 mb-4">
                or use your email for login here
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
