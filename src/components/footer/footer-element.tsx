import Link from "next/link";
import styles from "./footer-element.module.css";
import { cn } from "@/lib/utils";

type FooterElementProps = {
  children: React.ReactNode;
  className?: string;
};

type FooterItemProps = {
  children: React.ReactNode;
  href: string;
};

export default function FooterElement({
  children,
  className,
}: FooterElementProps) {
  return (
    <section className={cn(styles.footerElementContainer, className)}>
      {children}
    </section>
  );
}

FooterElement.FooterTitle = FooterTitle;
FooterElement.FooterList = FooterList;
FooterElement.FooterListItem = FooterListItem;

function FooterTitle({ children }: FooterElementProps) {
  return <h2 className={styles.footerElementTitle}>{children}</h2>;
}

function FooterList({ children }: FooterElementProps) {
  return <ul className={styles.footerElementList}>{children}</ul>;
}

function FooterListItem({ children, href }: FooterItemProps) {
  return (
    <li className={styles.footerElementItem}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
