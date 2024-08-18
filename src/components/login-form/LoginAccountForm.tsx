"use client";
import { useState } from "react";

export const LoginAccountForm = ({
  setEmail,
  setPassword,
}: {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}) => {
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
        minLength={6}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};
