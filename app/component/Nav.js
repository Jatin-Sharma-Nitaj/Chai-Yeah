"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Button from "@/app/ui/btn";
import { useSession, signOut } from "next-auth/react";
import { LayoutDashboard, User, LogOut, ChevronDown, ChevronUp } from "lucide-react";

const Nav = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown if user clicks outside or after 3 seconds of inactivity
  useEffect(() => {
    if (!dropdownOpen) return;

    // Close dropdown on click outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Set timeout to close dropdown after 3 seconds
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 3000);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timeout); // Clear timeout on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16 relative z-50">
      <Link
        href="/"
        className="logo gap-2 font-bold text-lg flex justify-center items-center"
      >
        <img className="invertImg" src="/favicon.ico" width={44} alt="" />
        <span className="text-xl md:text-base my-3 md:my-0">Chai<span className="text-amber-400">Yeah</span></span>
      </Link>

      {session ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-200 font-medium flex items-center gap-2"
          >
            Welcome, {session.user.name?.split(" ")[0]}
            {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg w-48 border border-gray-700 space-y-1 p-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition-all duration-150 rounded-md"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition-all duration-150 rounded-md"
              >
                <User size={18} />
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-zinc-600 transition-all duration-150 border border-white rounded-md"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link href="/login">
          <Button>Sign Up</Button>
        </Link>
      )}
    </div>
  );
};

export default Nav;