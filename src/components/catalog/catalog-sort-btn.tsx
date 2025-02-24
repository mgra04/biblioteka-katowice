"use client";

import styles from "./catalog-sort-btn.module.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

export default function CatalogSortBtn() {
  const [sortValue, setSortValue] = useState<string>("");

  const handleValueChange = (value: string) => {
    setSortValue(value);
  };

  return (
    <Select value={sortValue} onValueChange={handleValueChange}>
      <SelectTrigger>
        <div className={styles.triggerContent}>
          <ArrowUpDown className={styles.sortIcon} size={18} color="#21232d" />
          <SelectValue placeholder="Sortuj" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="author-inc">Autor A-Z</SelectItem>
          <SelectItem value="author-dec">Auto Z-A</SelectItem>
          <SelectItem value="title-inc">Tytuł A-Z</SelectItem>
          <SelectItem value="title-dec">Tytuł Z-A</SelectItem>
          <SelectItem value="release-inc">Rok wydania 1-9</SelectItem>
          <SelectItem value="release-dec">Rok wydania 9-1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
