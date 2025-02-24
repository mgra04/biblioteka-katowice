import styles from "./account-benefits-item.module.css";
import Image from "next/image";
import React from "react";
import Paragraph from "../ui/paragraph";

type AccountBenefitsItemProps = {
  imgSrc: string;
  imgAlt: string;
  text: string;
  width: number;
  height: number;
};

export default function AccountBenefitsItem({
  imgSrc,
  imgAlt,
  text,
  width,
  height,
}: AccountBenefitsItemProps) {
  return (
    <li className={styles.item}>
      <Image src={imgSrc} alt={imgAlt} width={width} height={height} />
      <Paragraph className={styles.text}>{text}</Paragraph>
    </li>
  );
}
