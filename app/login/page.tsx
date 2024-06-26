"use client";
import React from "react";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { IoEye, IoEyeOff } from "react-icons/io5";
import NextLink from "next/link";
const LoginPage = () => {
  const [value, setValue] = React.useState("woodcnc@example.com");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;
    return validateEmail(value) ? false : true;
  }, [value]);
  // for visible password
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center justify-center h-screen font-sans">
      <div className="bg-white border-2 border-r-emerald-500 rounded-3xl shadow-xl w-full max-w-[768px] h-[480px] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="hidden md:flex items-center justify-center rounded-full bg-emerald-500 text-white rounded-r-[40%] rounded-l-3xl h-full">
            <div className="flex flex-col items-center p-6 text-center">
              <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-4">
                Enter your personal details to use all of our site features
              </p>
              <NextLink href="/signup">
                <button className="bg-white text-emerald-500 py-2 px-4 rounded-full">
                  SignUp
                </button>
              </NextLink>
            </div>
          </div>
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <form className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold mb-4 text-emerald-500">
                Login Account
              </h1>
              <span className="text-gray-600 mb-4">
                or use your email for login here
              </span>
              <div className="flex space-x-4 mb-4">
                <a
                  href="www.google.com"
                  className="border shadow-md shadow-emerald-400 border-emerald-300 rounded-full flex items-center justify-center w-10 h-10 text-gray-500"
                >
                  <FaGooglePlusG />
                </a>
                <a
                  href="www.facebook.com"
                  className="border shadow-md shadow-emerald-400 border-emerald-300 rounded-full flex items-center justify-center w-10 h-10 text-gray-500"
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
                      <IoEye className="text-2xl text-emerald-600 text-default-400 pointer-events-none" />
                    ) : (
                      <IoEyeOff className="text-2xl text-emerald-500/80  text-default-400 pointer-events-none" />
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
                  className="w-full py-3 px-6 text-center rounded-full transition bg-gradient-to-r from-emerald-500 via-teal-100/100 to-emerald-500 shadow-md sm:w-max"
                >
                  <span className="block text-[#1c100c] font-semibold text-sm">
                    Login
                  </span>
                </button>
              </NextLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
