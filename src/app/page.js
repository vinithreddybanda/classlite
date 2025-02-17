"use client"; // Ensure this runs on the client-side

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []); // Runs only once after the component mounts

  return null; // No UI needed since it redirects
}
