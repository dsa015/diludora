"use client";
import { useState } from "react";

export const CreateAccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input name="password" type="password" placeholder="Confirm password" />
    </>
  );
};
