import { Banner } from "@/components/sections/Banner/Banner";
import { DiscountBanner } from "@/components/sections/DiscountBanner/DiscountBanner";
import { Membership } from "@/components/sections/Membership/Membership";
import { Trend } from "@/components/sections/Trend/Trend";
import { gql } from "@/graphql/client";
import { Languages } from "@/shared/i18n/types";

export default async function Index({
  params,
}: {
  params: { locale: Languages };
}) {
  const { sectionMembership } = await gql.GetSectionMembership({
    locale: params.locale,
  });

  const { sectionBanner } = await gql.GetSectionBanner({
    locale: params.locale,
  });

  const { sectionDiscount } = await gql.GetSectionDiscount({
    locale: params.locale,
  });

  const { sectionTrend } = await gql.GetSectionTrend({
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

      {sectionTrend.data && <Trend data={sectionTrend.data.attributes} />}

      {sectionMembership.data && (
        <Membership data={sectionMembership.data.attributes} />
      )}
    </>
  );
}
