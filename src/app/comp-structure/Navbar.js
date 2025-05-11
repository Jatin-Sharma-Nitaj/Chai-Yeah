"use client"
import Link from "next/link";

const Navbar = () => {
 
  
  return (
    <nav className="bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16">
      <Link href="/" className="logo font-bold text-lg flex justify-center items-center">
        <img className="invertImg" src="/tea.gif" width={44} alt="" />
        <span className="text-xl md:text-base my-3 md:my-0">ChaiYeah!</span>
      </Link>

      <Link  href="/login">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Sign Up
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
