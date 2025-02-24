import styles from "./branch-section-with-margin.module.css";

export default function BranchSectionWithMargin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.branchSectionWithMargin}>{children}</section>
  );
}
