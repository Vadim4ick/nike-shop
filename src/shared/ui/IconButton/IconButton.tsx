import type { FC, ReactNode } from "react";

export interface IconButtonProps extends ReactTagProps<"button"> {
  /**
   * icon
   */
  icon: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ icon, ...otherProps }) => (
  <button {...otherProps} className="rounded-full p-[6px] hover:bg-gray-200">
    {icon && <span>{icon}</span>}
  </button>
);

export { IconButton };
