"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="text-[#102030]">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-lg font-semibold">
          <Link href={"/"}>Shop-First</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="relative text-sm hover:text-orange-600 transition duration-300"
          >
            Home
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-[url('/wave.svg')] bg-no-repeat bg-contain"></span>
          </Link>
          <Link href="#" className="text-sm hover:text-orange-600 transition">
            Brand
          </Link>
          <Link href="#" className="text-sm hover:text-orange-600 transition">
            Products
          </Link>
          <Link href="#" className="text-sm hover:text-orange-600 transition">
            Reviews
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/login" className="text-sm hover:text-orange-600">
            Log in
          </Link>
          <Link
            href="/authentication"
            className="px-4 py-1 border border-orange-500 rounded-full text-sm text-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-orange-500"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#EFE6D0] px-6 pb-4">
          <nav className="flex flex-col gap-4">
            <Link href="#" className="text-sm hover:text-orange-600">
              Home
            </Link>
            <Link href="#" className="text-sm hover:text-orange-600">
              Brand
            </Link>
            <Link href="#" className="text-sm hover:text-orange-600">
              Products
            </Link>
            <Link href="#" className="text-sm hover:text-orange-600">
              Reviews
            </Link>
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="#" className="text-sm hover:text-orange-600">
              Log in
            </Link>
            <Link
              href="/authentication"
              className="w-fit px-4 py-1 border border-orange-500 rounded-full text-sm text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
