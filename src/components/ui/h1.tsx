import Image from "next/image";
import styles from "./h1.module.css";
import { cn } from "@/lib/utils";

type H1Props = {
  children: React.ReactNode;
  withImage?: "yes" | "no";
  imageUrl?: string;
  imageAlt?: string;
  imageSize?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

export default function H1({
  children,
  withImage,
  imageUrl,
  imageAlt,
  imageSize,
  className,
  style,
}: H1Props) {
  return (
    <>
      {withImage === "no" && (
        <h1 style={style} className={cn(styles.heading, className)}>
          {children}
        </h1>
      )}
      {withImage === "yes" && imageUrl && imageAlt && (
        <section className={cn(styles.headingSection, className)}>
          <h1 style={style} className={styles.heading}>
            {children}
          </h1>{" "}
          {typeof imageSize === "number" ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={imageSize}
              height={imageSize}
            />
          ) : (
            <div
              style={{
                width: imageSize,
                height: imageSize,
                position: "relative",
              }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </section>
      )}
    </>
  );
}
