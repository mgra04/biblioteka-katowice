import styles from "./branch-header.module.css";
import Image from "next/image";
import H1 from "../ui/h1";

type BranchHeaderProps = {
  branchImageUrl: string;
  branchImageAlt: string;
  branchNumber: string;
};

export default function BranchHeader({
  branchImageUrl,
  branchImageAlt,
  branchNumber,
}: BranchHeaderProps) {
  return (
    <header className={styles.branchHeader}>
      <div className={styles.branchImageWrapper}>
        <Image
          src={branchImageUrl}
          alt={branchImageAlt}
          fill
          sizes="(max-width: 78rem) 100vw, 24rem"
        />

        <div className={styles.branchAbsoluteCircle}>
          <Image
            className={styles.circle}
            src="/circles.svg"
            alt="branch-circle"
            fill
            sizes="(max-width: 78rem) 100vw, 24rem"
          />
        </div>

        <div className={styles.branchAbsoluteHeading}>
          <H1 withImage="no" style={{ color: "#FFFFFF", lineHeight: "1.125" }}>
            Filia nr {branchNumber}
          </H1>
        </div>
      </div>
    </header>
  );
}
