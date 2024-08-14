"use client";
import { createUser, loginUser } from "@/pocketbase";
import { useState } from "react";
import styles from "./Login.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          name="email"
          type="email"
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              loginUser(email, password);
              setIsSuccess(true);
              if (isSuccess) {
                alert("Login successful");
                window.location.href = ".";
              } else {
                alert("Incorrect username or password");
              }
            }}
          >
            Login
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              createUser(email, password);
              setIsSuccess(true);
              if (isSuccess) {
                window.location.href = ".";
              } else {
                alert("User already exists");
              }
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
