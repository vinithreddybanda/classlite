"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User, Session } from "@supabase/supabase-js"; // Import User & Session types

export function useUser() {
  const [user, setUser] = useState<User | null>(null); // Ensure proper type

  useEffect(() => {
    // Get session when component mounts
    const getSession = async () => {
      const { data }: { data: { session: Session | null } } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };

    getSession();

    // Listen for auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { user };
}
