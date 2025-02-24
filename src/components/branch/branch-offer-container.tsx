import styles from "./branch-offer-container.module.css";
import Link from "next/link";
import Paragraph from "../ui/paragraph";
import BranchHeadingWithIcon from "./branch-heading-with-icon";
import { TBranchOfferItem } from "@/lib/types";

type BranchOfferContainerProps = {
  branchOfferItems: TBranchOfferItem[];
};

export default function BranchOfferContainer({
  branchOfferItems,
}: BranchOfferContainerProps) {
  return (
    <div className={styles.branchOfferContainer}>
      <BranchHeadingWithIcon
        className={styles.branchOfferHeading}
        icon="star"
        type="offer"
      />
      <ul className={styles.branchOfferList}>
        <li>
          1. {branchOfferItems.at(0)?.text}{" "}
          {branchOfferItems.at(0)?.subItems.map((subItem) => (
            <Paragraph key={subItem.id}>- {subItem.text}</Paragraph>
          ))}
        </li>

        {branchOfferItems.map((offerItem, i) => (
          <li key={offerItem.id}>
            {i + 2}.{" "}
            {offerItem.linkUrl ? (
              <Link href={offerItem.linkUrl}>{offerItem.linkText}</Link>
            ) : (
              offerItem.text
            )}
            {offerItem.text && offerItem.linkText && ` ${offerItem.text}`}
          </li>
        ))}
      </ul>
      <div className={styles.divider3} />
    </div>
  );
}
