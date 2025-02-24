import Image from "next/image";
import H3 from "../ui/h3";
import { cn } from "@/lib/utils";
import styles from "./branch-heading-with-icon.module.css";

type BranchHeadingWithIconProps = {
  icon: string;
  type: "director" | "number" | "email" | "address" | "openingHours" | "offer";
  className?: string;
};

export default function BranchHeadingWithIcon({
  icon,
  type,
  className,
}: BranchHeadingWithIconProps) {
  return (
    <div className={cn(styles.branchIconHeading, className)}>
      <Image
        src={`/${icon}.svg`}
        alt="branch director icon"
        width={24}
        height={24}
      />
      <H3 className={styles.branchSectionHeading}>
        {type === "director" && "Kierownik filii"}
        {type === "number" && "Numer telefonu"}
        {type === "email" && "Adres email"}
        {type === "address" && "Adres"}
        {type === "openingHours" && "Godziny otwarcia"}
        {type === "offer" && "Oferta"}
      </H3>
    </div>
  );
}
