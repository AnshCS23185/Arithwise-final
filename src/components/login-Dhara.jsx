import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    /* 
      pt-24 is IMPORTANT
      This pushes content below fixed header
    */
    <div className="pt-24 min-h-screen grid lg:grid-cols-2">

      {/* LEFT BRAND PANEL */}
      <div
        className="hidden lg:flex flex-col justify-center px-20
        bg-gradient-to-br from-black via-purple-900 to-black text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold leading-tight mb-6"
        >
          Welcome Back
        </motion.h1>

        <p className="text-lg text-gray-300 max-w-md">
          Log in to access your workspace, manage solutions, and continue
          your journey with Arithwise.
        </p>
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="flex items-center justify-center bg-white px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold mb-2">
            Client Login
          </h2>

          <p className="text-gray-500 mb-10">
            Sign in to continue
          </p>

          {/* Username */}
          <div className="mb-8">
            <label className="block text-sm mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-2
              outline-none focus:border-purple-600 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-sm mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border-b border-gray-300 py-2 pr-10
              outline-none focus:border-purple-600 transition"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 cursor-pointer text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-10 text-sm">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>

          {/* Buttons */}
          <button
            className="w-full py-3 mb-4 text-white font-medium
            bg-gradient-to-r from-purple-600 to-fuchsia-600
            hover:opacity-90 transition"
          >
            Login
          </button>

          <button
            className="w-full py-3 font-medium text-purple-700
            border border-purple-600 hover:bg-purple-50 transition"
          >
            Admin Login
          </button>
        </motion.div>
      </div>
    </div>
  );
}
