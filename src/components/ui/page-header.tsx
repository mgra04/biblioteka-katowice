// FOR NEWS, EVENTS, BRANCHES PAGES
import styles from "./page-header.module.css";

type PageHeaderProps = {
  children: React.ReactNode;
};

export default function PageHeader({ children }: PageHeaderProps) {
  return <section className={styles.header}>{children}</section>;
}
