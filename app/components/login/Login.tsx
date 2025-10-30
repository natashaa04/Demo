"use client";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Login() {
  const router = useRouter();

  
  return (
    <div className={styles.container}>
      <form className={styles.form} >
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
        
          required
        />
        <button type="submit" className={styles.button} >
            Login
        </button>
        <p className={styles.signupText}>
          Don't have an account? <Link href="/signup">Signup</Link>
        </p>   
      </form>
    </div>
  );
}