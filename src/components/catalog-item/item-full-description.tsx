import Divider from "../ui/divider";
import H2 from "../ui/h2";
import Paragraph from "../ui/paragraph";
import styles from "./item-full-description.module.css";

type ItemFullDescriptionProps = {
  description: string;
};

export default function ItemFullDescription({
  description,
}: ItemFullDescriptionProps) {
  return (
    <section id="item-full-description" className={styles.itemFullDescription}>
      <H2 className={styles.itemSectionHeading}>Opis</H2>
      <Paragraph className={styles.paragraph} style={{ lineHeight: "1.8" }}>
        {description}
      </Paragraph>

      <Divider />
    </section>
  );
}
