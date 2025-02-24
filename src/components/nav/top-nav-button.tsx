"use client";

import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import styles from "./top-nav-button.module.css";
import { useTopNavContext } from "@/hooks/use-top-nav-context";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type TopNavButtonProps = {
  children?: React.ReactNode;
  type: "menu" | "account";
};

export default function TopNavButton({ children, type }: TopNavButtonProps) {
  const { handleMenuToggle: onToggleMenu, isOpenMenu } = useTopNavContext();
  const { data: session } = useSession();

  const accountHref = session ? "/konto" : "/signup";

  return (
    <>
      {type === "menu" && (
        <button
          onClick={onToggleMenu}
          className={cn(styles.button, styles.menuButton)}
        >
          <span className={styles.icon}>
            {isOpenMenu ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </span>
        </button>
      )}

      {type === "account" && (
        <Link
          href={accountHref}
          className={cn(styles.button, styles.accountButton)}
        >
          {children}
        </Link>
      )}
    </>
  );
}
