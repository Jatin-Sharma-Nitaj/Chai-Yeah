"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User, Mail, File, Key, Image, Lock } from "lucide-react";

const ProfileForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if the user is not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  // Handle loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 text-white">
      <form
        className="w-full max-w-2xl p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg space-y-6"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Profile Setup</h1>

        {/* Name */}
        <div className="space-y-2">
          <label className="block text-gray-300">Name</label>
          <div className="flex items-center gap-2">
            <User className="text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Ex. Harish Ali Khan"
              defaultValue={session?.user?.name}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-gray-300">Email</label>
          <div className="flex items-center gap-2">
            <Mail className="text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Ex. jatina9410@gmail.com"
              defaultValue={session?.user?.email}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Username */}
        <div className="space-y-2">
          <label className="block text-gray-300">Username</label>
          <div className="flex items-center gap-2">
            <User className="text-gray-400" size={20} />
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              defaultValue="jatina9410"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Profile Picture */}
        <div className="space-y-2">
          <label className="block text-gray-300">Profile Picture</label>
          <div className="flex items-center gap-2">
            <Image className="text-gray-400" size={20} />
            <input
              type="file"
              name="profilePicture"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>
        </div>

        {/* Cover Picture */}
        <div className="space-y-2">
          <label className="block text-gray-300">Cover Picture</label>
          <div className="flex items-center gap-2">
            <File className="text-gray-400" size={20} />
            <input
              type="file"
              name="coverPicture"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>
        </div>

        {/* Razorpay ID */}
        <div className="space-y-2">
          <label className="block text-gray-300">Razorpay ID</label>
          <div className="flex items-center gap-2">
            <Key className="text-gray-400" size={20} />
            <input
              type="text"
              name="razorpayId"
              placeholder="Enter Razorpay ID"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Razorpay Secret */}
        <div className="space-y-2">
          <label className="block text-gray-300">Razorpay Secret</label>
          <div className="flex items-center gap-2">
            <Lock className="text-gray-400" size={20} />
            <input
              type="password"
              name="razorpaySecret"
              placeholder="Enter Razorpay Secret"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;