"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./newsletter-form.module.css";
import Button from "../ui/button";

const schema = z.object({
  email: z.string().email("Wprowadź poprawny adres email"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Musisz wyrazić zgodę na przesyłanie informacji",
  }),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.newsletterForm}>
      <input
        type="email"
        placeholder="Wprowadź swój email"
        {...register("email")}
        className={styles.input}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <div className={styles.formGroup}>
        <input
          type="checkbox"
          id="consent"
          {...register("consent")}
          className={styles.checkbox}
        />
        <label htmlFor="consent" className={styles.label}>
          Wyrażam zgodę na przesyłanie informacji związanych z działalnością
          Biblioteki w Katowicach
        </label>
        {errors.consent && (
          <p className={styles.error}>{errors.consent.message}</p>
        )}
      </div>

      <Button
        variant="primary"
        size="lg"
        type="submit"
        className={styles.button}
      >
        Zapisz mnie
      </Button>
    </form>
  );
}
