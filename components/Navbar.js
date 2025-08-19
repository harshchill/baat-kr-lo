// components/Navbar.jsx
"use client"
// import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  // const user = useUser();
  // console.log(user.user?.id)
  return (
    <nav className="sticky top-0 bg-black px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-white tracking-wide"><Link href="/">Baate</Link></div>

      {/* Links */}
      <div className="flex space-x-8">
        <Link 
          href="/forum" 
          className="text-gray-300 hover:text-white transition"
        >
          Forum
        </Link>
        <Link 
          href="/chat" 
          className="text-gray-300 hover:text-white transition"
        >
          Chat
        </Link>
      </div>

      {/* User Button */}
      <UserButton/>
    </nav>
  );
}
