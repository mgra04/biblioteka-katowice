import { TBranchMap } from "@/lib/types";
import BranchSelect from "../ui/branch-select";
import MapFindClosestBranch from "./map-find-closest-branch-btn";
import styles from "./map-main-actions.module.css";

type MapActionsProps = {
  branches: TBranchMap[];
};

export default function MapMainActions({ branches }: MapActionsProps) {
  return (
    <div className={styles.mapMainActions}>
      <MapFindClosestBranch branches={branches} />
      <p className={styles.infoText}>
        Wymaga zgody na udostępnienie lokalizacji
      </p>
      <BranchSelect className={styles.select} branches={branches} />
    </div>
  );
}
