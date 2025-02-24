type BranchOpeningHoursListProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function BranchOpeningHoursList({
  children,
  className,
}: BranchOpeningHoursListProps) {
  return <section className={className}>{children}</section>;
}
