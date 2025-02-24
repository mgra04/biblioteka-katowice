import Divider from "../ui/divider";
import H2 from "../ui/h2";
import Paragraph from "../ui/paragraph";
import styles from "./item-about-author.module.css";

type ItemAboutAuthorProps = {
  authorName: string;
  authorAbout: string;
};

export default function ItemAboutAuthor({
  authorName,
  authorAbout,
}: ItemAboutAuthorProps) {
  return (
    <section className={styles.itemAboutAuthor}>
      <H2 className={styles.itemSectionHeading}>O autorze</H2>
      <section className={styles.itemAboutAuthorContent}>
        <Paragraph style={{ lineHeight: "1.8" }} className={styles.paragraph}>
          <span className={styles.itemAboutAuthorBoldText}>{authorName}</span> -{" "}
          {authorAbout}
        </Paragraph>
      </section>

      <Divider />
    </section>
  );
}
