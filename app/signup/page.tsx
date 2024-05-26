"use client";
import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Input } from "@nextui-org/input";

const [value, setValue] = React.useState("woodcnc@example.com");

const validateEmail = (value) =>
  value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

const isInvalid = React.useMemo(() => {
  if (value === "") return false;
  return validateEmail(value) ? false : true;
}, [value]);

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
                <a
                  href="#"
                  className="border shadow-md shadow-teal-600 border-teal-300 rounded-full flex items-center justify-center w-10 h-10 text-gray-500"
                >
                  <FaFacebookF />
                </a>
              </div>
              <Input
                placeholder="Enter your name"
                type="name"
                label="Name"
                isRequired
                variant="bordered"
                className="max-w-xs mb-2"
              />
              <Input
                value={value}
                type="email"
                label="Email"
                isRequired
                variant="bordered"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "default"}
                errorMessage={isInvalid && "Please enter a valid email"}
                onValueChange={setValue}
                className="max-w-xs mb-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
