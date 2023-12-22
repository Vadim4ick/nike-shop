import Link from "next/link";

import { CartIcon, LikeIcon, NikeIcon } from "@/ui/icons";

import { IconButton, Typography } from "@/shared/ui";
import { GetHeaderLinkListQuery } from "@/graphql/__generated__";

const Header = ({
  linkLists,
}: {
  linkLists: GetHeaderLinkListQuery["linkLists"]["data"];
}) => {
  return (
    <header className="relative z-[10] flex h-[4rem] items-center justify-between gap-[1.25rem] px-[2.25rem]">
      <NikeIcon className="ml-[0.75rem] h-[3.6rem] w-[3.6rem] scale-125" />

      <ul className="flex">
        {linkLists.map((nav, index) => (
          <li key={index} className="peer cursor-pointer overflow-hidden">
            <div className="group border-b-[0.188rem] border-white p-[0.75rem] hover:border-b-black-100">
              <Typography variant="link">{nav.attributes.title}</Typography>

              <div className="absolute left-0 top-[3.3rem] z-[10] h-[0] w-[100vw] overflow-hidden bg-white group-hover:h-auto">
                <div className="flex translate-y-[-0.75rem] justify-center gap-[3rem] py-[2rem] opacity-0 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100">
                  {nav.attributes.links.map((link, index) => (
                    <div key={index}>
                      <Typography variant="link">{link.title}</Typography>

                      <ul className="mt-[0.625rem]">
                        {link.link.map((link) => (
                          <li key={link.id}>
                            <a href={link.href}>
                              <Typography variant="body-3">
                                {link.label}
                              </Typography>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="invisible fixed left-0 top-[10rem] z-[0] h-full w-full bg-black-100 opacity-0 transition-all duration-500 peer-hover:opacity-20 peer-hover:blur-lg" />
      </ul>

      <div>
        <Link className="mr-[0.75rem]" href={"/"}>
          <IconButton icon={<LikeIcon />} />
        </Link>

        <Link href={"/"}>
          <IconButton icon={<CartIcon />} />
        </Link>
      </div>
    </header>
  );
};

export { Header };
