"use client";

import styles from "./check-availability-btn.module.css";
import { useState } from "react";
import Button from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import AvailableItemList from "./ui/available-item-list";
import AvailableItem from "./ui/available-item";
import { TCatalogItemCard } from "@/lib/types";

type CheckAvailabilityBtnProps = {
  branches: TCatalogItemCard["branches"];
};

export default function CheckAvailabilityBtn({
  branches,
}: CheckAvailabilityBtnProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

  const handleBranchSelect = (branchId: string) => {
    setSelectedBranchId(branchId === "all" ? null : branchId);
  };

  const filteredBranches = selectedBranchId
    ? branches.filter((branch) => branch.branchId === selectedBranchId)
    : branches;

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="md">
            Sprawdź dostępność
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className={styles.drawerContent}>
            <DrawerHeader>
              <DrawerTitle>Sprawdź dostępność</DrawerTitle>
              <DrawerDescription>
                Wiedźmin. Rodzroże króków. Tom 10
              </DrawerDescription>
            </DrawerHeader>
            <div>
              <BranchSelect branches={branches} onSelect={handleBranchSelect} />

              <AvailableItemList className={styles.availableItemList}>
                {filteredBranches.map((branch) => (
                  <AvailableItem
                    key={branch.branchId}
                    data={{
                      branchName: branch.branch.branchName,
                      branchStreet: branch.branch.branchAddressStreet,
                      status:
                        branch.catalogItemQuantity > 0
                          ? "Dostępna"
                          : "Niedostępna",
                      quantity: branch.catalogItemQuantity,
                    }}
                  />
                ))}
              </AvailableItemList>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" size="lg">
                  Zamknij
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
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
