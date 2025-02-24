import { TNewsItem } from "@/lib/types";
import H1 from "../ui/h1";
import styles from "./home-news-section.module.css";
import HomeNewsSlider from "./home-news-slider";

type HomeNewsSectionProps = {
  news: TNewsItem[];
};

export default function HomeNewsSection({ news }: HomeNewsSectionProps) {
  return (
    <section className={styles.newsSection}>
      <H1
        withImage="yes"
        imageSize="var(--image-size)"
        imageAlt="bell icon"
        imageUrl="/newsIcon.svg"
        className={styles.sectionHeading}
      >
        Aktualności
      </H1>
      <HomeNewsSlider news={news} />
    </section>
  );
}
