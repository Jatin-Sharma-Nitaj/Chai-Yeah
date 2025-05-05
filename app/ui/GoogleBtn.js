"use client";
import React from "react";
import { signIn } from "next-auth/react";

const GoogleBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      onClick={() => signIn("google")}
      className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-zinc-200 text-black rounded-lg shadow-md hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition duration-300"
    >
      {/* Google Icon */}
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.9 0 7.1 1.6 9.3 3.3l7-7C36.5 2.5 30.7 0 24 0 14.6 0 6.4 5.8 2.5 14.2l8.3 6.5C12.5 13.3 17.8 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.5 24c0-1.6-.2-3.2-.5-4.7H24v9h12.7c-.5 2.7-2 5-4.3 6.5l6.7 5.2c3.9-3.6 6.4-8.9 6.4-15z"
        />
        <path
          fill="#FBBC05"
          d="M10.8 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7L2.5 14.2C.9 17.3 0 20.6 0 24s.9 6.7 2.5 9.8l8.3-6.5z"
        />
        <path
          fill="#4285F4"
          d="M24 48c6.5 0 12-2.1 16-5.7l-8-6.3c-2.2 1.5-5 2.4-8 2.4-6.2 0-11.5-4.2-13.4-9.8l-8.3 6.5C6.4 42.2 14.6 48 24 48z"
        />
      </svg>
      {/* Button Text */}
      <span>{children || "Continue with Google"}</span>
    </button>
  );
};

export default GoogleBtn;