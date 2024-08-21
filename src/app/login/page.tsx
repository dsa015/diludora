"use client";
import { createUser, loginUser, pb } from "@/pocketbase";
import { useState } from "react";
import styles from "./Login.module.scss";
import { LoginAccountForm } from "@/components/login-form/LoginAccountForm";
import { CreateAccountForm } from "@/components/login-form/CreateAccountForm";
import imageSrc from "../../../public/splittetImage.png";
import Image from "next/image";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4rem",
      }}
    >
      <div className={styles.imageContainer}>
        <Image src={imageSrc} fill objectFit="cover" alt="image of food" />;
      </div>

      <div className={styles.container}>
        <form className={styles.form}>
          {!isLogin ? (
            <LoginAccountForm setEmail={setEmail} setPassword={setPassword} />
          ) : (
            <CreateAccountForm setEmail={setEmail} setPassword={setPassword} />
          )}
          <button
            className={styles.submitButton}
            type="button"
            onClick={() => {
              isLogin
                ? createUser(email, password)
                : loginUser(email, password);
              if (pb.authStore.isValid) {
                window.location.href = "/";
              }
            }}
          >
            Continue
          </button>
          <button
            className={styles.createOrSignInButton}
            type="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {!isLogin
              ? "Dont have an account? Create account"
              : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
