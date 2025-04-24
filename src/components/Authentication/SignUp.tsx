"use client";

import api from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import modelImage from "../../../public/assest/HeroImage/Group 143725924.png";

interface SignUpPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

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
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Simple validation before request
    if (!form.name || !form.email || !form.phone || !form.password) {
      setMessage("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      console.log("Submitting signup data:", form); // Debug log

      const res = await api.post("/public/user/store", form);
      setMessage("Signup successful!");
      console.log("Signup success:", res.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response) {
        console.error("API error response:", err.response.data); // Debug log
        setMessage(
          err.response.data.message ||
            "Signup failed. Please check your inputs."
        );
      } else {
        console.error("Signup error:", err.message);
        setMessage("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5ecd7]">
      {/* Form Section */}
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
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="017xxxxxxxx"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
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

      {/* Image Section */}
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
