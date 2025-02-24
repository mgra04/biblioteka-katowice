import Button from "../ui/button";
import styles from "./branch-info-container.module.css";
import BranchInfoItem from "./branch-info-item";
import BranchInfoList from "./branch-info-list";

type BranchInfoContainerProps = {
  directorName: string;
  number: string;
  email: string;
  addressArea: string;
  addressCode: string;
  addressStreet: string;
  googleMapLink: string;
};

export default function BranchInfoContainer({
  directorName,
  number,
  email,
  addressArea,
  addressCode,
  addressStreet,
  googleMapLink,
}: BranchInfoContainerProps) {
  return (
    <div className={styles.branchInfoContainer}>
      <BranchInfoList className={styles.branchInfoList}>
        <BranchInfoItem
          type="director"
          directorName={directorName}
          icon="branch-director"
        />
        <BranchInfoItem type="number" number={number} icon="phone-number" />
        <BranchInfoItem type="email" email={email} icon="email" />
        <BranchInfoItem
          type="address"
          addressArea={addressArea}
          addressCode={addressCode}
          addressStreet={addressStreet}
          icon="branch-address"
        />
      </BranchInfoList>
      <Button
        className={styles.howToGetThereBtn}
        link="yes"
        href={googleMapLink}
        variant="outline"
        size="lg"
      >
        Jak dojechać?
      </Button>
      <div className={styles.divider1} />
    </div>
  );
}
