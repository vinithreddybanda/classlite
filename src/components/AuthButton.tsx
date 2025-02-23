"use client";
import { supabase } from "@/lib/supabase";
import { useUser } from "@/hooks/useUser";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function AuthButton() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) setError(error.message);
  };

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    setLoading(false);
    if (error) setError(error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div className="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-semibold mb-4">{user ? "Welcome Back!" : "Sign In"}</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {user ? (
          <>
            <p className="text-lg font-medium mb-4">{user.email}</p>
            <button
              onClick={handleSignOut}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 transition text-white font-semibold flex items-center justify-center"
              disabled={loading}
            >
              {loading ? <FaSpinner className="animate-spin mr-2" /> : "Sign Out"}
            </button>
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : "Sign in with Google"}
          </button>
        )}
      </div>
    </div>
  );
}
