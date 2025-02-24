import HomeEventsSection from "@/components/home/home-events-section";
import styles from "./home-page.module.css";
import HomeHeroSection from "@/components/home/home-hero-section";
import HomeNewsSection from "@/components/home/home-news-section";
import HomeMapSection from "@/components/home/home-map-section";
import { getEvents, getNews } from "@/lib/server-utils";

export default async function Home() {
  const { events } = await getEvents(1, 10);
  const { news } = await getNews(1, 6);

  return (
    <main className={styles.page}>
      <HomeHeroSection />

      <HomeNewsSection news={news} />

      <HomeEventsSection events={events} />

      <HomeMapSection />
    </main>
  );
}
