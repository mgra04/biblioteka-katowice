import Paragraph from "../ui/paragraph";
import styles from "./branch-info-item.module.css";
import BranchHeadingWithIcon from "./branch-heading-with-icon";

type BranchInfoItemProps = {
  directorName?: string;
  number?: string;
  email?: string;
  addressArea?: string;
  addressCode?: string;
  addressStreet?: string;
  type: "director" | "number" | "email" | "address";
  icon: string;
};

export default function BranchInfoItem({
  directorName,
  number,
  email,
  addressArea,
  addressCode,
  addressStreet,
  type,
  icon,
}: BranchInfoItemProps) {
  return (
    <div className={styles.branchInfoItem}>
      <BranchHeadingWithIcon icon={icon} type={type} />
      {type !== "address" ? (
        <Paragraph className={styles.branchText}>
          {type === "director" && directorName}
          {type === "number" && number}
          {type === "email" && email}
        </Paragraph>
      ) : (
        addressStreet && (
          <div className={styles.branchAddressList}>
            <Paragraph className={styles.branchText}>{addressArea},</Paragraph>
            <Paragraph className={styles.branchText}>{addressCode},</Paragraph>
            <Paragraph className={styles.branchText}>
              {addressStreet.startsWith("Al.")
                ? addressStreet
                : `ul. ${addressStreet}`}
            </Paragraph>
          </div>
        )
      )}
    </div>
  );
}
