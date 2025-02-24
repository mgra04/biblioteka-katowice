"use client";

import styles from "./sign-form.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../ui/button";
import Link from "next/link";
import { signinSchema, signupSchema } from "@/lib/validations";
import { signIn } from "next-auth/react";

type SignFormProps = {
  version: "signup" | "signin";
};

export default function SignForm({ version }: SignFormProps) {
  const schema = version === "signup" ? signupSchema : signinSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    if (version === "signup") {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        console.error(result.message);
        return;
      }
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/konto",
      });
    } else {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/konto",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.inputLabel}>
          Email
        </label>
        <input
          id="email"
          className={styles.input}
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.inputLabel}>
          Hasło
        </label>
        <input
          id="password"
          className={styles.input}
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      {version === "signup" && (
        <>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.inputLabel}>
              Potwierdź hasło
            </label>
            <input
              id="confirmPassword"
              className={styles.input}
              type="password"
              {...register("confirmPassword", { required: true })}
            />
            {/* @ts-expect-error: confirmPassword is only present in signup */}
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
          <div className={styles.checkboxGroup}>
            <input
              id="consent"
              className={styles.checkbox}
              type="checkbox"
              {...register("consent", { required: true })}
            />
            <label htmlFor="consent" className={styles.checkboxLabel}>
              Akceptuję <Link href="/">regulamin</Link> biblioteki
            </label>
            {/* @ts-expect-error: consent is only present in signup */}
            {errors.consent && <p>{errors.consent.message}</p>}
          </div>
        </>
      )}
      <Button
        className={styles.formBtn}
        size="lg"
        link="no"
        variant="primary"
        type="submit"
      >
        {version === "signup" ? "Zarejestruj się" : "Zaloguj się"}
      </Button>
    </form>
  );
}
