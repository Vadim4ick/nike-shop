/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from "next/image";
import Image from "next/image";

export interface ItemCardProps {
  /**
   * image
   */
  image: ImageProps;
  /**
   * title
   */
  title: string;
  /**
   * type
   */
  type: string;
  /**
   * price
   */
  price: number;
}

/**
 * ItemCard component
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  image,
  title,
  type,
  price,
}) => (
  <div>
    <div className="relative h-[28rem] w-[28rem]">
      <Image fill className="object-cover" {...image} />
    </div>

    <div className="mt-[0.75rem] flex justify-between align-top">
      <div>
        <h4 className="title-3">{title}</h4>
        <p className="body-3 text-grey">{type}</p>
      </div>

      <p className="body-3 text-grey">{price}</p>
    </div>
  </div>
);
