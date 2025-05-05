"use client";
import React from "react";
import { signIn } from "next-auth/react";

const GithubBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      onClick={() => signIn("github")}
      className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300"
    >
      {/* GitHub Icon */}
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.11-.774.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.24 2.873.117 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.478 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
          clipRule="evenodd"
        />
      </svg>
      {/* Button Text */}
      <span>{children || "Continue with GitHub"}</span>
    </button>
  );
};

export default GithubBtn;