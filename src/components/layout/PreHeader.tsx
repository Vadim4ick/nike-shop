import React from "react";
import Link from "next/link";

import { ConverseIcon, JordanIcon } from "@/ui/icons";
import { Typography } from "@/shared/ui";

const ROUTES = [
  {
    name: "Find a Store",
    href: "/",
  },
  {
    name: "Help",
    href: "/",
  },
  { name: "Join Us", href: "/" },
  { name: "Sign In", href: "/" },
];

export const PreHeader = () => (
  <div className="h-max-[60px] flex items-center justify-between bg-gray-100 px-[36px] py-[10px]">
    <ul className="flex items-center">
      <li className="px-[8px]">
        <Link href="/">
          <JordanIcon height={35} width={35} />
        </Link>
      </li>
      <li className="px-[8px]">
        <Link href="/">
          <ConverseIcon height={30} width={30} />
        </Link>
      </li>
    </ul>
    <div className="flex items-center justify-center">
      {ROUTES.map((route, index) => (
        <React.Fragment key={index}>
          <Link className="mx-[8px] px-[8px] py-[4px]" href={route.href}>
            <Typography variant="link">{route.name}</Typography>
          </Link>

          <Typography tag="div" variant="link">
            {ROUTES.length - 1 !== index && <span>|</span>}
          </Typography>
        </React.Fragment>
      ))}
    </div>
  </div>
);
