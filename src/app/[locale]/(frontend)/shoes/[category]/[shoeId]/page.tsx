import { DiscountBanner } from "@/components/sections/DiscountBanner/DiscountBanner";
import { ShoeComponent } from "@/components/sections/Shoe/Shoe";
import { gql } from "@/graphql/client";
import { Languages } from "@/shared/i18n/types";
import { notFound } from "next/navigation";

interface ShoeProps {
  params: {
    locale: Languages;
    shoeId: string;
  };
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
    </>
  );
}
