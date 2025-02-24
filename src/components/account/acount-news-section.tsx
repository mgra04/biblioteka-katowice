import styles from "./account-news-section.module.css";
import { TNewsItem } from "@/lib/types";
import H2 from "../ui/h2";
import AccountNewsSlider from "./account-news-slider";

type AccountNewsSectionProps = {
  news: TNewsItem[];
};

export default function AccountNewsSection({ news }: AccountNewsSectionProps) {
  return (
    <section className={styles.newsSection}>
      <H2 className={styles.sectionHeading}>Zapisane aktualności</H2>
      <AccountNewsSlider news={news} />
    </section>
  );
}
