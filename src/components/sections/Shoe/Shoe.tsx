"use client";

import Image from "next/image";
import React, { memo } from "react";
import ReactMarkdown from "react-markdown";

import { LikeIcon } from "@/ui/icons";
import { Button, Gallery, Typography } from "@/shared/ui";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { GetSectionShoeQuery, GetShoeQuery } from "@/graphql/__generated__";

type ShoeComponentData = {
  shoe: GetShoeQuery["shoe"]["data"]["attributes"];
} & GetSectionShoeQuery["sectionShoe"]["data"]["attributes"];

interface ShoeProps {
  data: ShoeComponentData;
}

// eslint-disable-next-line react/display-name
export const ShoeComponent = memo((props: ShoeProps) => {
  const { data } = props;
  // const [selectedOption, setSelectedOption] = React.useState(
  //   data.shoe.options[0]
  // );
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  return (
    <section className="my-[3rem] flex items-center justify-center">
      <div className="flex w-full max-w-[80rem] ">
        <div className="sticky top-[2rem] flex h-fit w-[60%] justify-center">
          <Gallery
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
            images={data.shoe.options.map((element) => {
              return {
                alt: element.medias.data.attributes.name,
                src: getFileUrl(element.medias.data.attributes.url),
                placeholder: "blur",
                blurDataURL: getFileUrl(
                  element.medias.data.attributes.previewUrl
                ),
              };
            })}
          />
          {/* <Gallery
            images={data.shoe.options.map((element) => {
              return {
                alt: element.medias.data.attributes.name,
                src: getFileUrl(element.medias.data.attributes.url),
                placeholder: "blur",
                blurDataURL: getFileUrl(
                  element.medias.data.attributes.previewUrl
                ),
              };
            })}
          /> */}
        </div>
        <div className="flex w-[30%] flex-col p-[1rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <Typography className="text-[1.4rem]" tag="h1" variant="body-1">
              {data.shoe.name}
            </Typography>
            <Typography className="text-[1rem]" tag="h2" variant="title-4">
              {data.shoe.type}
            </Typography>
          </div>
          <div className="mt-[1rem] w-[100%] text-left">
            <Typography tag="h2" variant="title-4">
              {data.shoe.price}
            </Typography>
          </div>
          <div className="flex gap-[0.5rem] bg-gray-200 p-4">
            {data.shoe.options.map((el, i) => {
              return (
                <div
                  onClick={() => setActiveImageIndex(i)}
                  style={{ backgroundColor: el.color }}
                  className={`w-7 h-7 border-black-100 border-[2px] cursor-pointer rounded-full`}
                  key={el.id}
                />
              );
            })}
          </div>
          <div className="mt-[1rem]">
            <ReactMarkdown
              className="title-5"
              components={{
                p: ({ children }) => (
                  <Typography
                    className="text-[1rem] leading-[1.5rem]"
                    tag="p"
                    variant="body-2"
                  >
                    {children}
                  </Typography>
                ),
                ul: ({ children }) => (
                  <ul className="mt-[2rem] flex list-disc flex-col gap-[1rem] pl-[1rem]">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li>
                    <Typography className="text-[1rem]" variant="body-2">
                      {children}
                    </Typography>
                  </li>
                ),
              }}
            >
              {data.shoe.description}
            </ReactMarkdown>
          </div>
          {(data.addToBagButton || data.favoriteButton) && (
            <div className="mt-[1rem] flex flex-col gap-[0.5rem]">
              {data.addToBagButton && (
                <Button>{data.addToBagButton.label}</Button>
              )}
              {data.favoriteButton && (
                <Button endIcon={<LikeIcon />} variant="outlined">
                  {data.favoriteButton.label}
                </Button>
              )}
            </div>
          )}
          {data.detailsButton && (
            <div className="mt-[1rem]">
              <button>
                <Typography
                  className="border-b-[0.1rem] pb-[0.1rem]"
                  variant="title-4"
                >
                  {data.detailsButton.label}
                </Typography>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});
