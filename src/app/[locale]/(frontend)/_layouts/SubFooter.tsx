import { GetLayoutSubFootersQuery } from "@/graphql/__generated__";
import { Typography } from "@/shared/ui";
import Link from "next/link";

const ARRAY_PREVIEW_LENGTH = 3;

export const SubFooter = ({
  data,
}: {
  data: GetLayoutSubFootersQuery["layoutSubFooters"]["data"];
}) => {
  return (
    <section className="flex w-full items-start justify-center py-[1rem] transition-all duration-1000">
      <div className="group flex items-start gap-[5rem]">
        {data.map((link) => (
          <div key={link.attributes.title}>
            <Typography className="text-black-100" tag="h4" variant="title-4">
              {link.attributes.title}
            </Typography>

            <ul className="mt-[1rem] flex flex-col gap-[0.75rem] overflow-hidden">
              {link.attributes.links
                .slice(0, ARRAY_PREVIEW_LENGTH)
                .map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <Typography
                        className="text-black-200 hover:text-black-100"
                        variant="body-3"
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}

              {link.attributes.links.length > ARRAY_PREVIEW_LENGTH && (
                <div
                  aria-hidden="true"
                  className="flex max-h-[0] flex-col gap-[0.75rem] opacity-0 transition-all duration-500 group-hover:max-h-[100rem] group-hover:opacity-100"
                  role="list"
                >
                  {link.attributes.links
                    .slice(ARRAY_PREVIEW_LENGTH)
                    .map((link) => (
                      <li key={link.id}>
                        <Link href={link.href}>
                          <Typography
                            className="text-black-200 hover:text-black-100"
                            variant="body-3"
                          >
                            {link.label}
                          </Typography>
                        </Link>
                      </li>
                    ))}
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
