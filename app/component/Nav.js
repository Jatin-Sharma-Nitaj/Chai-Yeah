"use client"
import Link from 'next/link'
import React from 'react'
import Button from '@/app/ui/btn'
import { useSession } from 'next-auth/react'
const Nav = () => {
  const { data: session } = useSession();
  console.log("Session in Nav:", session); // Debug log
  
  return (
    <div className="bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16">
      <Link href="/" className="logo gap-2 font-bold text-lg flex justify-center items-center">
        <img className="invertImg" src="/favicon.ico" width={44} alt="" />
        <span className="text-xl md:text-base my-3 md:my-0">ChaiYeah!</span>
      </Link>
      <Link href="/login">
        <Button  >
        Log In
        </Button>
      </Link>
    </div>
  )
}

export default Nav