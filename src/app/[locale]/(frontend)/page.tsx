import { Banner } from "@/components/sections/Banner/Banner";
import { DiscountBanner } from "@/components/sections/DiscountBanner/DiscountBanner";
import { Membership } from "@/components/sections/Membership/Membership";
import { Trend } from "@/components/sections/Trend/Trend";
import { gql } from "@/graphql/client";
import { PAGES } from "@/shared/const/pages";
import { Languages } from "@/shared/i18n/types";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const seo = await fetch(
    `${process.env.BASE_URL}/ru/api/metadata?page=${PAGES.HOME}`
  ).then((res) => res.json());

  const data = await seo;

  if (data.status === "error") {
    throw new Error(data.error.text);
  }

  return data.metadata;
}

export default async function Index({
  params,
}: {
  params: { locale: Languages };
}) {
  const { pageHome } = await gql.GetPageHome({
    locale: params.locale,
  });

  if (!pageHome.data) notFound();

  const { sectionMembership } = await gql.GetSectionMembership({
    locale: params.locale,
  });

  const { sectionBanner } = await gql.GetSectionBanner({
    locale: params.locale,
  });

  const { sectionTrend } = await gql.GetSectionTrend({
    locale: params.locale,
  });

  if (!pageHome.data.attributes.section_discount.data) notFound();

  const { sectionDiscount } = await gql.GetSectionDiscount({
    id: pageHome.data.attributes.section_discount.data.id,
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

      {sectionTrend.data && (
        <Trend data={sectionTrend.data.attributes} locale={params.locale} />
      )}

      {sectionMembership.data && (
        <Membership data={sectionMembership.data.attributes} />
      )}
    </>
  );
}
