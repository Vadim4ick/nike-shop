/* eslint-disable react/display-name */
import { ArrowIcon } from "@/shared/icons";
import clsx from "clsx";
import Image from "next/image";
import type { ImageProps } from "next/image";
import React, { Dispatch, memo } from "react";
import "./Gallery.css";
import InnerImageZoom, { InnerImageZoomProps } from "react-inner-image-zoom";

export interface GalleryProps extends ReactTagProps<"figure"> {
  /**
   * images
   */
  images: ImageProps[];

  activeImageIndex: number;

  setActiveImageIndex: Dispatch<React.SetStateAction<number>>;
}

export const GALLERY_TEST_IDS = {
  CONTAINER: "gallery-container",
  IMAGE: "gallery-image",
};

export const Gallery: React.FC<GalleryProps> = memo(
  ({ images, activeImageIndex, setActiveImageIndex }) => {
    const onNextClick = () => {
      const index =
        images.length > activeImageIndex + 1 ? activeImageIndex + 1 : 0;
      setActiveImageIndex(index);
    };

    const onBackClick = () => {
      const index =
        activeImageIndex - 1 < 0 ? images.length - 1 : activeImageIndex - 1;
      setActiveImageIndex(index);
    };

    // Явно указываем типы для свойств
    const innerImageZoomProps: InnerImageZoomProps = {
      zoomType: "hover",
      className: "absolute w-full h-full object-cover",
      src: String(images[activeImageIndex].src),
      zoomSrc: String(images[activeImageIndex].src),
    };

    return (
      <div className="flex gap-[1rem]" data-testid={GALLERY_TEST_IDS.CONTAINER}>
        <div className="flex flex-col gap-[1rem]">
          {images.map((image, index) => (
            <div
              key={index}
              data-testid={`${GALLERY_TEST_IDS.IMAGE}-${index}`}
              className={clsx("relative h-[3.5rem] w-[3.5rem]", {
                "backdrop-opacity-50": index === activeImageIndex,
              })}
              onMouseMove={() => setActiveImageIndex(index)}
            >
              <div
                className={clsx(
                  "absolute z-20 h-[100%] w-[100%] rounded-[0.5rem]",
                  {
                    "block bg-black-200 opacity-20": index === activeImageIndex,
                  }
                )}
              />
              <Image
                fill
                className="rounded-[0.5rem] object-cover"
                {...image}
              />
            </div>
          ))}
        </div>
        <div className="relative h-[40rem] w-[30rem] rounded-[0.5rem] object-fill">
          <InnerImageZoom {...innerImageZoomProps} />

          <div className="absolute bottom-4 right-4 flex gap-[0.5rem]">
            <button
              className="rounded-full bg-white p-[0.5rem]"
              onClick={onBackClick}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              className="rounded-full bg-white p-[0.5rem]"
              onClick={onNextClick}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
);
