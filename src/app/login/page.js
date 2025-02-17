// filepath: /c:/Users/vinit/OneDrive - Chaitanya Bharathi Institute of Technology/MP/classlite/src/app/login/page.js
"use client"; // Required for client-side interactivity

import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // TODO: Integrate Firebase Auth or Supabase later
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login to ClassLite</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button
            type="submit"
            className={styles.button}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}