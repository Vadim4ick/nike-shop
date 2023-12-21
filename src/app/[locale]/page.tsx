import { Banner } from "@/components/sections/Banner/Banner";
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

  return (
    <>
      {sectionBanner && (
        <Banner sectionBanner={sectionBanner.data.attributes} />
      )}
    </>
  );
}
