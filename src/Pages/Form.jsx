import React, { useState } from "react";

const Form = () => {
  const [role, setRole] = useState("");

  return (
    <>
      <div className="bg-gray-100 border-b border-gray-200">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-6
    flex flex-col md:flex-row
    justify-center md:justify-center
    items-center gap-4"
        >
          {/* Logo */}
          <div>
            <h1 className="text-3xl bg-[#FF0000] text-white font-bold px-1 pb-1 tracking-tight">
              upDate
            </h1>
          </div>

          {/* Title Content */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900">
              Artificial Intelligence and Machine Learning Certification Program
            </p>
            <p className="text-sm text-gray-600">
              From <span className="font-semibold text-red-600">upDate</span>
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-4xl p-8">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Create Account
          </h2>
          <p className="text-base text-gray-500 mb-6 text-center">
            Already have an account?{" "}
            <span className="text-red-600 font-semibold cursor-pointer">
              Sign in
            </span>
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-200 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-200 focus:outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-200 focus:outline-none transition"
              />
            </div>

            {/* Role */}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What describes you best <span className="text-red-600">*</span>
              </label>

              <div className="space-y-1">
                {/* Student */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === "student"}
                    onChange={(e) => setRole(e.target.value)}
                    className="accent-red-600 w-4 h-4 "
                  />
                  <span className="text-gray-700">Student</span>
                </label>

                {/* Working Professional */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="working"
                    checked={role === "working"}
                    onChange={(e) => setRole(e.target.value)}
                    className="accent-red-600 w-4 h-4"
                  />
                  <span className="text-gray-700">Working Professional</span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-300 hover:bg-red-200 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
