import CardSlider from "../ui/card-slider";
import Button from "../ui/button";
import NewsCard from "../news-card";
import { TNewsItem } from "@/lib/types";

type HomeNewsSliderProps = {
  news: TNewsItem[];
};

export default function HomeNewsSlider({ news }: HomeNewsSliderProps) {
  return (
    <CardSlider
      type="events"
      button={
        <Button variant="outline" size="lg" link="yes" href="/aktualnosci">
          Wszystkie aktualności
        </Button>
      }
    >
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </CardSlider>
  );
}
