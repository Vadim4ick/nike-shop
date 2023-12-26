"use client";

import { Carousel } from "@/components/Carousel/Carousel";
import { GetSectionTrendQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { Languages } from "@/shared/i18n/types";

type SectionTrendData =
  GetSectionTrendQuery["sectionTrend"]["data"]["attributes"];

export interface TrendProps {
  data: SectionTrendData;
  locale: Languages;
}

export const Trend: React.FC<TrendProps> = ({ data, locale }) => {
  return (
    <section className="scroll_container my-[3rem] flex flex-col items-center justify-between">
      <Carousel
        title={data.sectionTitle}
        items={data.shoes.data.map((shoe) => {
          return {
            id: String(shoe.id),
            title: shoe.attributes.name,
            price: shoe.attributes.price,
            type: shoe.attributes.type,

            image: getFileUrl(
              shoe.attributes.options[0].medias.data.attributes.url
            ),
            category: "test",
          };
        })}
        locale={locale}
      />
    </section>
  );
};
