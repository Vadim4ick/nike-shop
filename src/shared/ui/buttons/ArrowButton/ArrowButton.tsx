import { ArrowIcon } from "@/shared/icons";
import { cva } from "class-variance-authority";

export type ArrowButtonDirection = "left" | "right" | "up" | "down";

export interface ArrowButtonProps extends ReactTagProps<"button"> {
  /**
   * direction
   */
  direction?: ArrowButtonDirection;
}

const classNames = cva(
  "rounded-full transition-all p-[0.375rem] bg-gray-200 h-[3rem] w-[3rem] flex justify-center items-center enabled:hover:bg-gray-250 disabled:opacity-30",
  {
    defaultVariants: { direction: "right" },
    variants: {
      direction: {
        left: "rotate-180",
        right: "rotate-0",
        up: "-rotate-90",
        down: "rotate-90",
      },
    },
  }
);

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction = "right",
  ...props
}) => (
  <button {...props} className={classNames({ direction })}>
    <span>
      <ArrowIcon />
    </span>
  </button>
);
