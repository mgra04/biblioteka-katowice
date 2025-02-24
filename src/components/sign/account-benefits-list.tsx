import styles from "./account-benefits-list.module.css";

export default function AccountBenefitsList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className={styles.list}>{children}</ul>;
}
