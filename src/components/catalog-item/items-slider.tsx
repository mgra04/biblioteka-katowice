import { TCatalogItemCard } from "@/lib/types";
import CatalogCard from "../catalog-card";
import Button from "../ui/button";
import CardSlider from "../ui/card-slider";

type ItemsSliderProps = {
  items: TCatalogItemCard[];
};

export default function ItemsSlider({ items }: ItemsSliderProps) {
  return (
    <CardSlider
      type="catalogItems"
      button={
        <Button variant="outline" size="lg" link="yes" href="/katalog-glowny">
          Zobacz wszystkie
        </Button>
      }
    >
      {items.map((item) => (
        <CatalogCard key={item.id} catalogItem={item} />
      ))}
    </CardSlider>
  );
}
