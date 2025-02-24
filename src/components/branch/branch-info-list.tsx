type BranchInfoListProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function BranchInfoList({
  children,
  className,
}: BranchInfoListProps) {
  return <section className={className}>{children}</section>;
}
