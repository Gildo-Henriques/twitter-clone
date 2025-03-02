"use client"
import LogoX from "../components/ui/LogoX";
import {redirect} from "next/navigation"

export default function Page() {
  redirect ('/home')
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <LogoX position={1} size={100}/>
    </div>
  )
}