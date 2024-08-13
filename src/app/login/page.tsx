"use client";
import { createUser, loginUser } from "@/pocketbase";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          border: "1px solid black",
          padding: "1rem",
        }}
      >
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              loginUser(email, password);
            }}
          >
            Login
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              createUser(email, password);
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
