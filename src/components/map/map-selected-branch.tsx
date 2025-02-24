"use client";

import styles from "./map-selected-branch.module.css";
import useSWR from "swr";
import Button from "../ui/button";
import { useMapContext } from "@/hooks/use-map-context";
import { MoveLeft } from "lucide-react";
import BranchCard from "../branch-card";

type MapSelectedBranchProps = {
  branchId: string;
};

async function fetchBranch(id: string) {
  const res = await fetch(`/api/branch/${id}`);
  if (!res.ok) throw new Error("Failed to fetch branch data");
  return res.json();
}

export default function MapSelectedBranch({
  branchId,
}: MapSelectedBranchProps) {
  const { resetMap } = useMapContext();

  const {
    data: branch,
    error,
    isLoading,
  } = useSWR(branchId ? `/api/branch/${branchId}` : null, () =>
    fetchBranch(branchId)
  );

  if (isLoading)
    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner} />
      </div>
    );
  if (error) return <p>Wystąpił błąd: {String(error)}</p>;
  if (!branch) return <p>Nie znaleziono filii.</p>;

  return (
    <section className={styles.selectedBranch}>
      <Button onClick={resetMap} variant="primary" size="lg" link="no">
        <MoveLeft size={18} /> Wróć do wyboru filii
      </Button>

      <BranchCard branch={branch} />
    </section>
  );
}
