"use client";

import { useTransition } from "react";
import Button from "./ui/button";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      onClick={async () => {
        startTransition(async () => {
          {
            await signOut({ callbackUrl: "/" });
          }
        });
      }}
      disabled={isPending}
      size="lg"
      variant="primary"
    >
      Wyloguj się
    </Button>
  );
}
