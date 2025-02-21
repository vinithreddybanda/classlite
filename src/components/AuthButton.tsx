"use client";
import { supabase } from "@/lib/supabase";
import { useUser } from "@/hooks/useUser";

export default function AuthButton() {
  const { user } = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4">{user ? "Welcome Back!" : "Sign In"}</h2>

        {user ? (
          <>
            <p className="text-lg font-medium mb-4">{user.email}</p>
            <button
              onClick={handleSignOut}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 transition text-white font-semibold"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={async () => {
              const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
              if (error) console.error("Google Sign-in Error:", error.message);
            }}
            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition"
          >
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
