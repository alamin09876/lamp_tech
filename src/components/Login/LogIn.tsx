"use client";
import Image from "next/image";
import Link from "next/link";
import shoppingGirl from "../../../public/assest/HeroImage/Group 143725924.png";

export default function LogIn() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 bg-[#f7ebd9] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#102030]">
            Log In
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#102030] mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Ex: Johndoe@gmail.com"
                className="w-full px-4 py-2 border rounded-md bg-white text-[#102030] focus:outline-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#102030] mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full px-4 py-2 border rounded-md bg-white text-[#102030] focus:outline-orange-400"
                />
              </div>
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="ml-2 text-sm text-orange-500 hover:underline whitespace-nowrap "
                >
                  Forgot Password
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-[#102030]">
            Already have an account?{" "}
            <Link href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden md:flex w-1/2 bg-[#f7ebd9] items-end justify-center">
        <Image
          src={shoppingGirl}
          alt="Shopping Girl"
          width={400}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
