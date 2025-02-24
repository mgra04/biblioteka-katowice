// "use server";

// import prisma from "@/lib/db";
// import { signupSchema } from "@/lib/validations";
// import { Prisma } from "@prisma/client";
// import bcrypt from "bcryptjs";
// import { redirect } from "next/navigation";

// export async function logIn(formData: FormData) {
//   if (!(formData instanceof FormData)) {
//     return {
//       message: "Invalid form data.",
//     };
//   }

//   console.log(formData);

//   const body = new URLSearchParams();
//   for (const [key, value] of formData.entries()) {
//     body.append(key, value as string);
//   }
//   console.log(body);

//   try {
//     const res = await fetch("/api/auth/callback/credentials", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: body.toString(),
//     });
//     if (!res.ok) {
//       return { message: "Invalid credentials." };
//     }
//     return {};
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       if (error.name === "CredentialsSignin") {
//         return { message: "Invalid credentials." };
//       }
//       return { message: "Error. Could not sign in." };
//     }
//     throw error;
//   }
// }

// export async function signUp(formData: unknown) {
//   if (!(formData instanceof FormData)) {
//     return {
//       message: "Invalid form data.",
//     };
//   }

//   console.log(formData);

//   const formDataEntries = Object.fromEntries(formData.entries());

//   const validatedFormData = signupSchema.safeParse(formDataEntries);
//   console.log(validatedFormData);
//   if (!validatedFormData.success) {
//     return {
//       message: "Invalid form data.",
//     };
//   }

//   const { email, password } = validatedFormData.data;
//   //   console.log(validatedFormData.data);
//   //   console.log(email, password);
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     await prisma.user.create({
//       data: {
//         email,
//         hashedPassword: hashedPassword,
//         role: "USER",
//       },
//     });
//   } catch (error) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       if (error.code === "P2002") {
//         return {
//           message: "User with this email already exists.",
//         };
//       }
//     }

//     return {
//       message: "Could not create user.",
//     };
//   }

//   return await logIn(formData as FormData);
// }

// export async function logOut() {
//   await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signout`, {
//     method: "POST",
//   });

//   redirect("/login");
// }
