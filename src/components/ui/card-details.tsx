import Image from "next/image";
import styles from "./card-details.module.css";
import Paragraph from "./paragraph";

type CardDetailsProps = {
  children: React.ReactNode;
  type: "icon" | "text";
  variant?: "location" | "date" | "email";
  className?: string;
  size?: number;
};

export default function CardDetails({
  children,
  type,
  variant,
  className,
  size,
}: CardDetailsProps) {
  return (
    <>
      {type === "icon" && variant && (
        <div className={styles.cardDetailsContainer}>
          {<Icon variant={variant} size={size} />}
          <div className={className}>{children}</div>
        </div>
      )}
      {type === "text" && (
        <Paragraph className={className}>{children}</Paragraph>
      )}
    </>
  );
}

function Icon({
  variant,
  size,
}: {
  variant: "location" | "date" | "email";
  size?: number;
}) {
  return (
    <Image
      src={`/${variant}.svg`}
      alt={`${variant} icon`}
      className={styles.icon}
      width={size ? size : 32}
      height={size ? size : 32}
    />
  );
}
