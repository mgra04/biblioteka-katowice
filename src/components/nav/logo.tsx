import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className={styles.logoContainer} href="/">
      <Image
        src="/logo.svg"
        alt="Logo biblioteki w Katowicach"
        width={32}
        height={32}
      />
      <div className={styles.logoTextContainer}>
        <p className={styles.logoText}>Biblioteka</p>
        <p className={styles.logoText}>Katowice</p>
      </div>
    </Link>
  );
}
