import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import styles from "./map-library-type-select.module.css";
import { cn } from "@/lib/utils";

export default function MapLibraryTypeSelect({
  className,
}: {
  className?: string;
}) {
  return (
    <Select>
      <SelectTrigger className={cn(styles.selectTrigger, className)}>
        <SelectValue placeholder="Wybierz filię" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="a">A</SelectItem>
          <SelectItem value="b">B</SelectItem>
          <SelectItem value="c">C</SelectItem>
          <SelectItem value="d">D</SelectItem>
          <SelectItem value="e">E</SelectItem>
          <SelectItem value="f">F</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
