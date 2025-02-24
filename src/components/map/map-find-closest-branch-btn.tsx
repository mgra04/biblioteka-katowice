"use client";

import styles from "./map-find-closest-branch.module.css";
import Button from "../ui/button";
import { TBranchMap } from "@/lib/types";
import { handleFindClosest } from "@/lib/utils";
import { useMapContext } from "@/hooks/use-map-context";

type MapFindClosestBranchProps = {
  branches: TBranchMap[];
};

export default function MapFindClosestBranch({
  branches,
}: MapFindClosestBranchProps) {
  const { setMapCenter, setMapZoom, setSelectedBranchId } = useMapContext();

  return (
    <Button
      onClick={async () => {
        try {
          const closestBranchId = await handleFindClosest(
            branches,
            setMapCenter,
            setMapZoom
          );
          console.log(closestBranchId);

          if (typeof closestBranchId === "string") {
            setSelectedBranchId(closestBranchId);
          } else {
            setSelectedBranchId(null);
          }
        } catch (error) {
          console.error("Error finding closest branch:", error);
        }
      }}
      link="no"
      className={styles.btn}
      variant="primary"
      size="lg"
    >
      Wyszukaj najbliższą filię
    </Button>
  );
}
