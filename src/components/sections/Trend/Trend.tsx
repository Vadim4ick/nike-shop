"use client";

import { Carousel } from "@/components/Carousel/Carousel";
import { GetSectionTrendQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";

type SectionTrendData =
  GetSectionTrendQuery["sectionTrend"]["data"]["attributes"];

export interface TrendProps {
  data: SectionTrendData;
}

export const Trend: React.FC<TrendProps> = ({ data }) => {
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
              shoe.attributes.options[0].medias.data[0].attributes.url
            ),
            category: "test",
          };
        })}
      />
    </section>
  );
};
