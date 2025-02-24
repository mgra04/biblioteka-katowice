"use client";

import Logo from "./logo";
import TopNavButton from "./top-nav-button";
import Image from "next/image";
import styles from "./top-nav.module.css";
import TopNavList from "./top-nav-list";
import { SessionProvider } from "next-auth/react";

export default function TopNav() {
  return (
    <SessionProvider>
      <header className={styles.nav}>
        <Logo />

        <TopNavList />

        <TopNavButton type="account">
          <Image
            src="/account.svg"
            alt="user icon"
            height={16}
            width={16}
            style={{ width: "auto", height: "auto" }}
            className={styles.icon}
          />
        </TopNavButton>

        <TopNavButton type="menu" />
      </header>
    </SessionProvider>
  );
}
