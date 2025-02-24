import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword, consent } = await request.json();

    // Walidacja danych
    if (!email || !password || !confirmPassword || !consent) {
      return NextResponse.json(
        { message: "Brak wymaganych danych" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Hasła nie są zgodne" },
        { status: 400 }
      );
    }

    // Sprawdzenie, czy użytkownik już istnieje
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "Użytkownik już istnieje" },
        { status: 400 }
      );
    }

    // Haszowanie hasła
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tworzenie użytkownika w bazie
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        role: "USER", // przykładowa rola
      },
    });

    return NextResponse.json(
      {
        message: "Użytkownik utworzony",
        userId: user.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Błąd podczas tworzenia użytkownika" },
      { status: 500 }
    );
  }
}
