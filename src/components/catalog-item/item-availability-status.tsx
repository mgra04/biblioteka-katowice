"use client";

import { TCatalogItemCard } from "@/lib/types";
import AvailableItem from "../ui/available-item";
import AvailableItemList from "../ui/available-item-list";
import BtnsGroup from "../ui/btns-group";
import Divider from "../ui/divider";
import H2 from "../ui/h2";
import CatalogItemSortBtn from "./catalog-item-sort-btn";
import styles from "./item-availability-status.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

type ItemAvailabilityStatusProps = {
  branches: TCatalogItemCard["branches"];
};

export default function ItemAvailabilityStatus({
  branches,
}: ItemAvailabilityStatusProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

  const handleBranchSelect = (branchId: string) => {
    setSelectedBranchId(branchId === "all" ? null : branchId);
  };

  const filteredBranches = selectedBranchId
    ? branches.filter((branch) => branch.branchId === selectedBranchId)
    : branches;

  return (
    <section className={styles.itemAvailabilityStatus}>
      <section className={styles.itemAvailabilityStatusHeader}>
        <H2 className={styles.itemSectionHeading}>Status dostępności</H2>
        <BtnsGroup>
          <BranchSelect branches={branches} onSelect={handleBranchSelect} />
          <CatalogItemSortBtn />
        </BtnsGroup>
      </section>

      <AvailableItemList className={styles.availableItemList}>
        {filteredBranches.map((branch) => (
          <AvailableItem
            key={branch.branchId}
            data={{
              branchName: branch.branch.branchName,
              branchStreet: branch.branch.branchAddressStreet,
              status:
                branch.catalogItemQuantity > 0 ? "Dostępna" : "Niedostępna",
              quantity: branch.catalogItemQuantity,
            }}
          />
        ))}
      </AvailableItemList>

      <Divider />
    </section>
  );
}

function BranchSelect({
  branches,
  onSelect,
}: {
  branches: TCatalogItemCard["branches"];
  onSelect: (branchId: string) => void;
}) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className={styles.selectTrigger}>
        <div className={styles.triggerContent}>
          <SelectValue placeholder="Wybierz filię" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem key="all" value="all">
            Wyświetl wszystkie filie
          </SelectItem>
          {branches.map((branch) => (
            <SelectItem key={branch.branchId} value={branch.branchId}>
              {branch.branch.branchName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
