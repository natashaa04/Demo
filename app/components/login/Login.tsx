"use client";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useApi } from "@/app/customHooks/useApi";

export default function Login() {
  const router = useRouter();
  const { loginUser } = useApi();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(credentials);
      if (res?.token) {
        alert("Login successful!");
        router.push("/");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        <p className={styles.signupText}>
          Don't have an account? <Link href="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
