import Image from "next/image";
import Link from "next/link";
import modelImage from "../../../public/assest/HeroImage/Group 143725924.png"; // Replace with your image path

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f5ecd7]">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Sign Up
          </h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: John Doe"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>

          {/* Phone Number */}
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
                placeholder="Phone number"
                className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Ex: johndoe@gmail.com"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="***********"
              className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-[#f97316] text-white py-2 rounded-md font-semibold hover:bg-[#ea580c] transition">
            Sign Up
          </button>

          {/* Log In Link */}
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#f97316] font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Image */}
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
