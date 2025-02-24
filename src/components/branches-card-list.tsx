import styles from "./branches-card-list.module.css";
import BranchCard from "./branch-card";
import { TBranchCard } from "@/lib/types";

type BranchesCardListProps = {
  branches: TBranchCard[];
};

export default async function BranchesCardList({
  branches,
}: BranchesCardListProps) {
  return (
    <section className={styles.cardList}>
      {branches.map((branch) => (
        <BranchCard key={branch.id} branch={branch} />
      ))}
    </section>
  );
}
