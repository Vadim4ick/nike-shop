"use client";

import React from "react";
import Link from "next/link";

import { ConverseIcon, JordanIcon } from "@/ui/icons";
import { Typography } from "@/shared/ui";
import { GetPreHeaderQuery } from "@/graphql/client";
import { ToggleSwither } from "@/components/toggleSwither/ToggleSwither";

export const PreHeader = ({
  preHeader,
}: {
  preHeader: GetPreHeaderQuery["preHeader"]["data"];
}) => {
  return (
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
        <ToggleSwither />

        {preHeader.attributes.links.map((route, i) => (
          <React.Fragment key={route.id}>
            <Link className="mx-[8px] px-[8px] py-[4px]" href={route.href}>
              <Typography variant="link">{route.label}</Typography>
            </Link>

            <Typography tag="div" variant="link">
              {preHeader.attributes.links.length - 1 !== i && <span>|</span>}
            </Typography>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
