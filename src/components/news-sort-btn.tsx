import styles from "./news-sort-btn.module.css";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

export function NewsSortBtn() {
  return (
    <Select>
      <SelectTrigger>
        <div className={styles.triggerContent}>
          <ArrowUpDown className={styles.sortIcon} size={18} color="#21232d" />
          <SelectValue placeholder="Sortuj" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">Od najnowszych</SelectItem>
          <SelectItem value="oldest">Od najstarszych</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
