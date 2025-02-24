import { TCatalogItemParams } from "@/lib/types";
import Divider from "../ui/divider";
import H2 from "../ui/h2";
import styles from "./item-params.module.css";
import ParamsItem from "./params-item";
import ParamsItemList from "./params-item-list";

type ItemParamsProps = {
  params: TCatalogItemParams;
};

export default function ItemParams({ params }: ItemParamsProps) {
  return (
    <section id="item-params" className={styles.itemParams}>
      <H2 className={styles.itemSectionHeading}>Dane szczegółowe</H2>
      <ParamsItemList className={styles.itemParamsList} version="long">
        {params.map((param) =>
          param.catalogItemParamValue.map((value) => (
            <ParamsItem
              key={value.id}
              version="long"
              label={param.catalogItemParamName}
              link={value.catalogItemParamLink ? "yes" : "no"}
              content={value.catalogItemParamValue}
              href={value.catalogItemParamLink || undefined}
            />
          ))
        )}
      </ParamsItemList>

      <Divider />
    </section>
  );
}
