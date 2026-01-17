import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    /* 
      IMPORTANT:
      - mt-[112px] offsets fixed header
      - min-h-[calc(100vh-112px)] keeps full viewport height
    */
    <div
      className="
        mt-[112px]
        min-h-[calc(100vh-112px)]
        grid lg:grid-cols-2
      "
    >
      {/* ================= LEFT BRAND PANEL ================= */}
      <div
        className="
          hidden lg:flex flex-col justify-center px-24
          bg-gradient-to-br from-black via-purple-900 to-black
          text-white relative overflow-hidden
        "
      >
        {/* Purple glow */}
        <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-purple-600/30 blur-[220px]" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-7xl font-bold leading-tight mb-8"
        >
          Welcome Back
        </motion.h1>

        <p className="relative text-xl leading-relaxed text-white/85 max-w-lg">
          Log in to access your workspace, manage solutions, and
          continue your journey with{" "}
          <span className="text-purple-400 font-medium">
            Arithwise
          </span>.
        </p>
      </div>

      {/* ================= RIGHT LOGIN PANEL ================= */}
      <div
        className="
          flex items-center justify-center
          px-8 sm:px-20
          bg-white dark:bg-black
          relative overflow-hidden
        "
      >
        {/* Background glow */}
        <div className="absolute w-[520px] h-[520px] bg-purple-600/20 blur-[240px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative w-full max-w-lg
            rounded-3xl
            p-12

            bg-white/95 dark:bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-[0_30px_90px_rgba(168,85,247,0.45)]
          "
        >
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-2 text-black dark:text-white">
            Client Login
          </h2>

          <p className="text-lg mb-12 text-gray-600 dark:text-white/65">
            Sign in to continue
          </p>

          {/* Username */}
          <div className="mb-10">
            <label className="block text-base mb-3 text-gray-700 dark:text-white/75">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="
                w-full py-4 px-5 rounded-xl
                text-lg
                bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-white/20
                text-black dark:text-white
                placeholder-gray-400 dark:placeholder-white/40
                outline-none
                focus:border-purple-500
                focus:ring-2 focus:ring-purple-500/30
                transition
              "
            />
          </div>

          {/* Password */}
          <div className="mb-8 relative">
            <label className="block text-base mb-3 text-gray-700 dark:text-white/75">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="
                w-full py-4 px-5 pr-14 rounded-xl
                text-lg
                bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-white/20
                text-black dark:text-white
                placeholder-gray-400 dark:placeholder-white/40
                outline-none
                focus:border-purple-500
                focus:ring-2 focus:ring-purple-500/30
                transition
              "
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-5 top-[52px]
                cursor-pointer
                text-xl
                text-gray-500 dark:text-white/60
                hover:text-purple-400
                transition
              "
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-3 mb-12 text-base text-gray-600 dark:text-white/65">
            <input
              type="checkbox"
              className="accent-purple-600 w-4 h-4"
            />
            <span>Remember Me</span>
          </div>

          {/* Login Button */}
          <button
            className="
              w-full py-4 mb-5
              rounded-xl
              text-lg font-semibold
              text-white
              bg-gradient-to-r from-purple-600 to-fuchsia-600
              shadow-[0_12px_35px_rgba(168,85,247,0.65)]
              hover:opacity-90
              transition
            "
          >
            Login
          </button>

          {/* Admin Login */}
          <button
            className="
              w-full py-4
              rounded-xl
              text-lg font-semibold
              text-purple-600 dark:text-purple-400
              border border-purple-600/60
              hover:bg-purple-600/10
              transition
            "
          >
            Admin Login
          </button>
        </motion.div>
      </div>
    </div>
  );
}
