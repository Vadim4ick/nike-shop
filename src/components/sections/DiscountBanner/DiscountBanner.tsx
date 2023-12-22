"use client";

import { GetSectionDiscountQuery } from "@/graphql/__generated__";
import { Typography } from "@/shared/ui";
import React from "react";
import ReactMarkdown from "react-markdown";

const DISCOUNT_SHOWING_INTERVAL = 5000;

type TDiscountBanner =
  GetSectionDiscountQuery["sectionDiscount"]["data"]["attributes"]["items"];

export const DiscountBanner = ({ items }: { items: TDiscountBanner }) => {
  const [direction, setDirection] = React.useState<"left" | "right">("right");
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const next = direction === "right" ? 1 : -1;
      const isNextLast = activeIndex + next === items.length - 1;
      const isFirstLast = activeIndex + next === 0;

      setActiveIndex((prev) => prev + next);
      if (isNextLast) setDirection("left");
      if (isFirstLast) setDirection("right");
    }, DISCOUNT_SHOWING_INTERVAL);

    return () => clearInterval(interval);
  }, [activeIndex, direction, items.length]);

  return (
    <section className="flex bg-gray-100">
      <ul
        className="w-full whitespace-nowrap py-[0.4rem] text-center transition-all duration-1000"
        style={{ translate: `${activeIndex * -100}%` }}
      >
        {items.map((item, index) => {
          return (
            <li key={index} className="inline-block w-full">
              <Typography tag="span" variant="title-3">
                {item.title}
              </Typography>

              <div className="mt-[0.5rem]">
                <ReactMarkdown
                  className="title-5"
                  components={{
                    a: ({ node, ...props }) => (
                      <a className="underline" {...props}>
                        <strong>{props.children}</strong>
                      </a>
                    ),
                  }}
                >
                  {item.description2}
                </ReactMarkdown>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
