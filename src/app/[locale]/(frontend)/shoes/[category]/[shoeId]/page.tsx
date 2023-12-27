import { DiscountBanner } from "@/components/sections/DiscountBanner/DiscountBanner";
import { ShoeComponent } from "@/components/sections/Shoe/Shoe";
import { Trend } from "@/components/sections/Trend/Trend";
import { gql } from "@/graphql/client";
import { PAGES } from "@/shared/const/pages";
import { Languages } from "@/shared/i18n/types";
import { notFound } from "next/navigation";

interface ShoeProps {
  params: {
    locale: Languages;
    shoeId: string;
  };
}

export async function generateMetadata() {
  const seo = await fetch(
    `${process.env.BASE_URL}/ru/api/metadata?page=${PAGES.SHOES}`
  ).then((res) => res.json());

  const data = await seo;

  if (data.status === "error") {
    throw new Error(data.error.text);
  }

  return data.metadata;
}

export default async function Shoe(props: ShoeProps) {
  const { locale, shoeId } = props.params;

  const { pageShoe } = await gql.GetPageShoe({
    locale: locale,
  });

  const { shoe } = await gql.GetShoe({
    id: shoeId,
    locale: locale,
  });

  if (!shoe.data) notFound();

  if (!pageShoe.data) notFound();

  const { sectionDiscount } = await gql.GetSectionDiscount({
    id: pageShoe.data.attributes.section_discount.data.id,
    locale: locale,
  });

  const { sectionShoe } = await gql.GetSectionShoe({
    locale: locale,
  });

  const { sectionTrend } = await gql.GetSectionTrend({
    locale,
  });

  return (
    <>
      {sectionDiscount.data && (
        <DiscountBanner items={sectionDiscount.data.attributes.items} />
      )}

      {shoe.data && sectionShoe.data && (
        <ShoeComponent
          data={{ shoe: shoe.data.attributes, ...sectionShoe.data.attributes }}
        />
      )}

      {sectionTrend.data && (
        <Trend data={sectionTrend.data.attributes} locale={locale} />
      )}
    </>
  );
}
