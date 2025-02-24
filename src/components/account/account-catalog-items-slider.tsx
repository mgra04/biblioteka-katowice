import { TCatalogItemCard } from "@/lib/types";
import CardSlider from "../ui/card-slider";
import CatalogCard from "../catalog-card";

type CatalogItemsSliderProps = {
  catalogItems: TCatalogItemCard[];
};

export default function AccountCatalogItemsSlider({
  catalogItems,
}: CatalogItemsSliderProps) {
  return (
    <CardSlider type="catalogItems">
      {catalogItems.map((item) => (
        <CatalogCard key={item.id} catalogItem={item} />
      ))}
    </CardSlider>
  );
}
