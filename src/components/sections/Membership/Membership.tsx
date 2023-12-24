import { GetSectionMembershipQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { Figure, Typography } from "@/shared/ui";

export const Membership = ({
  data,
}: {
  data: GetSectionMembershipQuery["sectionMembership"]["data"]["attributes"];
}) => {
  return (
    <section className="my-[3rem] flex w-full justify-center">
      <div className="flex w-full max-w-[90rem] flex-col px-[2.25rem]">
        <Typography tag="h2" variant="title-3">
          {data.title}
        </Typography>

        <div className="mt-[2rem] flex w-full max-w-[90rem] gap-[0.625rem]">
          {data.card.map((card, index) => (
            <div key={index} className="h-[18.75rem] w-[50%]">
              <Figure
                buttons={card.linkButton.map((button) => ({
                  children: button.label,
                }))}
                caption={card.caption}
                image={{
                  alt: card.caption,
                  src: getFileUrl(card.image.data.attributes.url),
                  blurDataURL: getFileUrl(
                    card.image.data.attributes.previewUrl
                  ),
                  placeholder: "blur",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
