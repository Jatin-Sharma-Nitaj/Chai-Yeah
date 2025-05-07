"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import GithubBtn from "@/app/ui/GithubBtn";
import GoogleBtn from "@/app/ui/GoogleBtn";
import { useRouter } from "next/navigation"; 

const Signup = () => {
  const {  status } = useSession();
  const router = useRouter();

  // Handle loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  // Redirect if the user is authenticated
  if (status === "authenticated") {
    router.push("/dashboard");
    return null; // Prevent rendering anything while redirecting
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-700">
        <h1 className="text-3xl font-bold mb-6">Sign Up to Get Started</h1>
        <p className="text-gray-400 mb-8">Choose a method to sign up:</p>
        <div className="flex flex-col gap-4">
          <GithubBtn>Sign Up with GitHub</GithubBtn>
          <GoogleBtn>Sign Up with Google</GoogleBtn>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => signIn()}
            className="text-blue-400 hover:underline"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;