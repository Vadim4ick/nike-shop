import { ReactNode } from "react";

type TypographyTag = "h1" | "h2" | "span" | "div" | "p";

type TypographyVariant =
  | "body-1"
  | "title-1"
  | "title-2"
  | "title-3"
  | "body-3"
  | "link";

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
