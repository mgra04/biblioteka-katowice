import { TNewsItem } from "@/lib/types";
import CardSlider from "../ui/card-slider";
import NewsCard from "../news-card";

type NewsSliderProps = {
  news: TNewsItem[];
};

export default function AccountNewsSlider({ news }: NewsSliderProps) {
  return (
    <CardSlider type="events">
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </CardSlider>
  );
}
