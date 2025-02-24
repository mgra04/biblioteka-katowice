import { cn } from "@/lib/utils";
import styles from "./branch-select.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { TBranchMap } from "@/lib/types";
import { useMapContext } from "@/hooks/use-map-context";

type BranchSelectProps = {
  className?: string;
  branches: TBranchMap[];
};

export default function BranchSelect({
  className,
  branches,
}: BranchSelectProps) {
  const { setSelectedBranchId, setMapCenter, setMapZoom } = useMapContext();

  const handleValueChange = (val: string) => {
    const { id, lat, lng } = JSON.parse(val);
    setSelectedBranchId(id);
    setMapCenter([lat, lng]);
    setMapZoom(18);
  };

  return (
    <Select onValueChange={(val) => handleValueChange(val)}>
      <SelectTrigger className={cn(styles.selectTrigger, className)}>
        <SelectValue placeholder="Wybierz filię" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {branches.map((branch) => (
            <SelectItem
              key={branch.id}
              value={JSON.stringify({
                id: branch.id,
                lat: branch.branchLatitude,
                lng: branch.branchLongitude,
              })}
            >
              {branch.branchName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
