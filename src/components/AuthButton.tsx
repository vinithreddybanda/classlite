"use client";
import { supabase } from "@/lib/supabase";
import { useUser } from "@/hooks/useUser";

export default function AuthButton() { // ✅ Default Export
  const { user } = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex flex-col items-center">
      {user ? (
        <>
          <p className="text-lg font-medium">Welcome, {user.email}</p>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-6 py-3 mt-3 rounded-lg hover:bg-red-500 transition"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={async () => {
            const { error } = await supabase.auth.signInWithOAuth({
              provider: "google",
            });
            if (error) console.error("Google Sign-in Error:", error.message);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}
