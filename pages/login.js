import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>

        {/* Input Fields */}
        <div className="mt-4 space-y-4">
          {!isLogin && (
            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          )}
          <motion.input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        </div>

        {/* Login / Signup Button */}
        <motion.button
          className="w-full mt-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          whileTap={{ scale: 0.95 }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </motion.button>

        {/* Google Login */}
        <button className="flex items-center justify-center w-full mt-4 p-2 border rounded-md text-gray-600 hover:bg-gray-100">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>

        {/* Toggle between Login & Signup */}
        <p className="mt-4 text-sm text-center text-gray-500">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
}
