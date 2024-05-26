"use client";
import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignupPage = () => {
  const [value, setValue] = React.useState("woodcnc@example.com");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;
    return validateEmail(value) ? false : true;
  }, [value]);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center justify-center h-screen font-serif">
      <div className="bg-white border-2 border-l-stone-500 rounded-3xl shadow-xl w-full max-w-[768px] h-[480px] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <form className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold mb-4 text-stone-500">
                Create Account
              </h1>
              <span className="text-gray-600 mb-4">
                or use your email for registration
              </span>

              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="border shadow-md shadow-stone-500 border-stone-300 rounded-full flex items-center justify-center w-10 h-10 text-gray-500"
                >
                  <FaGooglePlusG />
                </a>
                <a
                  href="#"
                  className="border shadow-md shadow-stone-500 border-stone-300 rounded-full flex items-center justify-center w-10 h-10 text-gray-500"
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
              <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <IoEye className="text-2xl text-stone-500  pointer-events-none" />
                    ) : (
                      <IoEyeOff className="text-2xl text-stone-500/80 text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs mb-2"
              />
              <NextLink href="/home" passHref>
                <button
                  type="button"
                  title="Start Login"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-gradient-to-r from-stone-500 via-teal-100/100 to-stone-500 shadow-md sm:w-max"
                >
                  <span className="block text-[#1c100c] font-semibold text-sm">
                    Sign Up
                  </span>
                </button>
              </NextLink>
            </form>
          </div>
          <div className="hidden md:flex items-center justify-center rounded-full  bg-stone-500  text-white rounded-l-[40%] rounded-r-3xl h-full">
            <div className="flex flex-col items-center p-6 text-center">
              <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-4">
                Enter your personal details to use all of our site features
              </p>
              <NextLink href="/login">
              <button className="bg-white text-stone-500 py-2 px-4 rounded-full">
                Login
              </button>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
