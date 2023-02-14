import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string | number;
}

const ChevronRight = ({ size = 12, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.15674 2.1021L8.05466 6.00002L4.15674 9.89795"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default ChevronRight;
