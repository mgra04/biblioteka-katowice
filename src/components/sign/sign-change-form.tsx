import styles from "./sign-change-form.module.css";
import Link from "next/link";
import Paragraph from "../ui/paragraph";

type SignChangeFormProps = {
  version: "signup" | "signin";
};

export default function SignChangeForm({ version }: SignChangeFormProps) {
  return (
    <Paragraph className={styles.text} style={{ lineHeight: "1" }}>
      {version === "signup" ? "Masz już konto?" : "Nie masz konta?"}
      <Link href={version === "signup" ? "/login" : "/signup"}>
        {version === "signup" ? "Zaloguj się" : "Zarejestruj się"}
      </Link>
    </Paragraph>
  );
}
