"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {
  const sesson = useSession();
  console.log(sesson);
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/">Menu</Link>
        <Link href="/">about</Link>
        <Link href="/">Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={"/login"}>login</Link>
        <Link
          href="/register"
          className="bg-primary px-6 py-2 rounded-full text-white"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
