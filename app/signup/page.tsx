"use client";
import React from "react";
import { FaGooglePlusG } from "react-icons/fa";

// Inside the form

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen font-serif">
      <div className="bg-white border-2 border-l-teal-400 rounded-3xl shadow-xl w-full max-w-[768px] h-[480px] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <form className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold mb-4 text-teal-500">
                Create Account
              </h1>
              <span className="text-gray-600 mb-4">
                or use your email for registration
              </span>

              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="border shadow-md shadow-teal-600 border-teal-300 rounded-full flex items-center justify-center w-10 h-10 text-gray-500"
                >
                  <FaGooglePlusG />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
