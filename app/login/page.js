"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import GithubBtn from "@/app/ui/GithubBtn";
import GoogleBtn from "@/app/ui/GoogleBtn";

const Signup = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-700">
          <h1 className="text-3xl font-semibold mb-2">Welcome, {session.user.name || session.user.email}!</h1>
          <p className="text-gray-400 mb-6">You're already signed in</p>
          <button
            onClick={() => signOut()}
            className="w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded-xl transition duration-300 shadow-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
          >
            Sign Out
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Sign Up to Get Started</h1>
        <p className="text-gray-400 mb-6">Choose a method to sign up:</p>

        <div className="flex flex-col gap-4">
          <GithubBtn>Sign Up with GitHub</GithubBtn>
          <GoogleBtn>Sign Up with Google</GoogleBtn>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <button onClick={() => signIn()} className="text-blue-400 hover:underline">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
