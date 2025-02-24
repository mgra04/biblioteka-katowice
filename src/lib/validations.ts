import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("Wprowadź poprawny adres email"),
    password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
    confirmPassword: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
    consent: z.preprocess(
      (val) => {
        if (typeof val === "boolean") return val;
        if (typeof val === "string")
          return val === "true" || val === "on" ? true : false;
        return false;
      },
      z.boolean().refine((val) => val === true, {
        message: "Musisz zaakceptować regulamin",
      })
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła muszą się zgadzać",
    path: ["confirmPassword"],
  });

export const signinSchema = z.object({
  email: z.string().email("Wprowadź poprawny adres email"),
  password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
});

export const searchFormSchema = z.object({
  query: z
    .string()
    .min(3, { message: "Query must be at least 3 characters long" })
    .max(50, { message: "Query must be at most 50 characters long" }),
  filter: z.enum(["title", "author", "publisher", "keywords"], {
    description: "Filter must be one of 'tytuł', 'autor', or 'słowakluczowe'",
  }),
});

export type TSearchForm = z.infer<typeof searchFormSchema>;
