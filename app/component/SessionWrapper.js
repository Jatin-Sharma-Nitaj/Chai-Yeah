"use client"
import { SessionProvider } from "next-auth/react"
import Nav from "./Nav"

export default function Sessionwrapper({children}) {
  return (
    <SessionProvider >
        {children}
    </SessionProvider>
  )
}