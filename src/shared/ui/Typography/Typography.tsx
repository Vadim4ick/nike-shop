import { ReactNode } from "react";

export type TypographyVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "title-4"
  | "title-5"
  | "sub-title"
  | "body-1"
  | "body-2"
  | "body-3"
  | "link";
export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";

interface TypographyProps {
  tag?: TypographyTag;
  className?: string;
  variant: TypographyVariant;
  children: ReactNode;
}

export const Typography = (props: TypographyProps) => {
  const { tag: Tag = "div", children, className = "", variant } = props;

  return <Tag className={`${className} ${variant}`}>{children}</Tag>;
};
