"use client";

import api from "@/lib/api";
import { SignUpPayload } from "@/types/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import modelImage from "../../../public/assest/HeroImage/Group 143725924.png";

const SignUp = () => {
  const [form, setForm] = useState<SignUpPayload>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await api.post("/public/user/store", form);
      setMessage("Signup successful!");
      console.log("Signup success:", res.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setMessage("Signup failed. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5ecd7]">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Sign Up
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex: John Doe"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value="+880"
                disabled
                className="w-20 px-3 py-2 border rounded-md bg-gray-100"
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ex: johndoe@gmail.com"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="***********"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f97316] text-white py-2 rounded-md font-semibold hover:bg-[#ea580c] transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {message && (
            <p className="text-center text-sm text-red-500">{message}</p>
          )}

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#f97316] font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex items-end justify-center p-4">
        <Image
          src={modelImage}
          alt="Shopping Lady"
          width={400}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SignUp;
