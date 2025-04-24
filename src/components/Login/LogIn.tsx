"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import shoppingGirl from "../../../public/assest/HeroImage/Group 143725924.png";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image section for small & large devices */}

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-[#f7ebd9] flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#102030]">
            Log In
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#102030] mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: Johndoe@gmail.com"
                className="w-full px-4 py-2 border rounded-md bg-white text-[#102030] focus:outline-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#102030] mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
                className="w-full px-4 py-2 border rounded-md bg-white text-[#102030] focus:outline-orange-400"
                required
              />
              <div className="flex justify-end mt-2">
                <Link
                  href="#"
                  className="text-sm text-orange-500 hover:underline"
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
            Don&apos;t have an account?{" "}
            <Link
              href="/authentication"
              className="text-orange-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-[#f7ebd9] flex justify-center items-end md:items-center py-6 md:py-0">
        <Image
          src={shoppingGirl}
          alt="Shopping Girl"
          width={400}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
}
