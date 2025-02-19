// eslint-disable-next-line @typescript-eslint/no-explicit-any


"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User, Session, AuthChangeEvent } from "@supabase/supabase-js"; // Import types

export function useUser() {
  const [user, setUser] = useState<User | null>(null); // Strictly typed

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
    };

    getSession();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return { user };
}
