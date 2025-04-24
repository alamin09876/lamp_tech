"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Brand", href: "#" },
    { label: "Products", href: "#" },
    { label: "Reviews", href: "#" },
  ];

  const renderLink = (label: string, href: string) => (
    <Link
      key={label}
      href={href}
      className="relative inline-block text-sm font-medium px-6 py-4 text-[#102030] hover:text-white transition duration-300"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-[url('/assest/HeroImage/Frame.png')] bg-no-repeat bg-center bg-contain opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
    </Link>
  );

  return (
    <header className="text-[#102030] bg-[#ebe3cc] ">
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="text-xl font-semibold">
          <Link href={"/"}>Shop-First</Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          {navLinks.map((link) => renderLink(link.label, link.href))}
        </nav>

        <div
          className={`${
            pathname === "/" ? "bg-[#062D3E]" : ""
          } px-[117px] py-[12px] -mr-[58px] hidden md:flex items-center gap-4 `}
        >
          <Link
            href="/login"
            className="text-sm text-orange-500 hover:text-orange-300 "
          >
            Log in
          </Link>
          <Link
            href="/authentication"
            className="px-4 py-1 border border-orange-500 rounded-full text-sm text-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            Sign up
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-orange-500"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#EFE6D0] px-6 pb-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:text-orange-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/login" className="text-sm hover:text-orange-600">
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
