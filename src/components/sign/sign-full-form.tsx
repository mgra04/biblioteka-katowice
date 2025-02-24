import Image from "next/image";
import Button from "../ui/button";
import SignForm from "./sign-form";
import styles from "./sign-full-form.module.css";
import SignOrDivider from "./sign-or-divider";
import SignChangeForm from "./sign-change-form";

type SignFullFormProps = {
  className?: string;
  version: "signup" | "signin";
};

export default function SignFullForm({
  className,
  version,
}: SignFullFormProps) {
  return (
    <section className={className}>
      <SignForm version={version} />

      <SignOrDivider />

      <Button
        link="yes"
        href="/"
        variant="outline"
        size="lg"
        className={styles.googleBtn}
      >
        <Image src="/google.svg" alt="google logo" width={24} height={24} />
        Kontynuuj z kontem Google
      </Button>

      <SignChangeForm version={version} />
    </section>
  );
}
