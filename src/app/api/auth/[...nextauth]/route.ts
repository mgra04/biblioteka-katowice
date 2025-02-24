// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // tu np. trzymasz obiekt konfiguracyjny

const handler = NextAuth(authOptions);

// Next.js 13 App Router wymaga eksportu poszczególnych metod
export { handler as GET, handler as POST };
