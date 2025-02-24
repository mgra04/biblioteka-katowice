import styles from "./sign-or-divider.module.css";

export default function SignOrDivider() {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <p className={styles.text}>lub</p>
      <div className={styles.line} />
    </div>
  );
}
