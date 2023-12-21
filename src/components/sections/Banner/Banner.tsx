import { GetSectionBannerQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { Typography } from "@/shared/ui";
import { Button } from "@/shared/ui/Button/Button";
import Link from "next/link";

export const Banner = ({
  sectionBanner,
}: {
  sectionBanner: GetSectionBannerQuery["sectionBanner"]["data"]["attributes"];
}) => (
  <section className="my-[3rem]">
    <div className="flex flex-col items-center justify-center px-[2.25rem] text-center">
      {sectionBanner.sectionTitle && (
        <Typography tag="p" variant="title-3">
          {sectionBanner.sectionTitle}
        </Typography>
      )}

      {sectionBanner.preSectionTitle && (
        <Typography tag="h1" variant="title-1">
          {sectionBanner.preSectionTitle}
        </Typography>
      )}

      {sectionBanner.subSectionTitle && (
        <Typography className={"mt-[0.5rem]"} tag="p" variant="title-3">
          {sectionBanner.subSectionTitle}
        </Typography>
      )}

      <div className="mt-[2rem] flex gap-[1rem]">
        {sectionBanner.linkButton.map((linkButton) => (
          <Link key={linkButton.id} href={linkButton.href}>
            <Button size="small">{linkButton.label}</Button>
          </Link>
        ))}
      </div>
    </div>

    <div className="mt-[4rem]">
      <video autoPlay loop muted className="h-full w-full" preload="auto">
        <source
          src={getFileUrl(sectionBanner.video.data.attributes.url)}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
  </section>
);
