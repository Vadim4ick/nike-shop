import { Banner } from "@/components/sections/Banner/Banner";
import { DiscountBanner } from "@/components/sections/DiscountBanner/DiscountBanner";
import { gql } from "@/graphql/client";
import { Languages } from "@/shared/i18n/types";

export default async function Index({
  params,
}: {
  params: { locale: Languages };
}) {
  const { sectionBanner } = await gql.GetSectionBanner({
    locale: params.locale,
  });

  const { sectionDiscount } = await gql.GetSectionDiscount({
    locale: params.locale,
  });

  return (
    <>
      {sectionDiscount.data && (
        <DiscountBanner items={sectionDiscount.data.attributes.items} />
      )}

      {sectionBanner.data && (
        <Banner sectionBanner={sectionBanner.data.attributes} />
      )}
    </>
  );
}
