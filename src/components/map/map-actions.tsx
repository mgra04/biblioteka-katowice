"use client";

import { useMapContext } from "@/hooks/use-map-context";
import H2 from "../ui/h2";
import styles from "./map-actions.module.css";
import MapFiltersList from "./map-filters-list";
import MapLibraryTypeSelect from "./map-library-type-select";
import MapMainActions from "./map-main-actions";
import { TBranchMap } from "@/lib/types";
import MapSelectedBranch from "./map-selected-branch";

type MapActionsProps = {
  branches: TBranchMap[];
};

export default function MapActions({ branches }: MapActionsProps) {
  const { selectedBranchId } = useMapContext();

  if (selectedBranchId) {
    return <MapSelectedBranch branchId={selectedBranchId} />;
  }

  return (
    <section className={styles.mapActions}>
      <MapMainActions branches={branches} />

      <section className={styles.mapfilters}>
        <H2 className={styles.filtersHeading}>Filtruj wyniki na mapie</H2>
        <MapFiltersList>
          <MapLibraryTypeSelect />
          <MapLibraryTypeSelect />
          <MapLibraryTypeSelect />
          <MapLibraryTypeSelect />
        </MapFiltersList>
      </section>
    </section>
  );
}
