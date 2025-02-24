import styles from "./params-item.module.css";
import Link from "next/link";
import Paragraph from "../ui/paragraph";

type ParamsItemProps = {
  label: string;
  link: "yes" | "no";
  content: string;
  version: "short" | "long";
  href?: string;
};

export default function ParamsItem({
  label,
  link,
  content,
  version,
  href,
}: ParamsItemProps) {
  return (
    <li
      className={
        version === "short" ? styles.paramsItemShort : styles.paramsItemLong
      }
    >
      <Paragraph className={styles.paramsItemLabel}>{label}:</Paragraph>{" "}
      {link === "yes" ? (
        <Link
          className={styles.paramsItemLink}
          href={href ? href : "/katalog-glowny"}
        >
          {content}
        </Link>
      ) : (
        <span className={styles.paramsItemContent}>{content}</span>
      )}
    </li>
  );
}
