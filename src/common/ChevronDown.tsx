import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string | number;
}

const ChevronDown = ({ size = 12, ...props }: IconProps) => {
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
        d="M5.98561 9.48747C6.08325 9.58511 6.24154 9.58511 6.33917 9.48747L11.1927 4.63392C11.2904 4.53629 11.2904 4.378 11.1927 4.28037L10.1321 3.21971C10.0344 3.12208 9.87614 3.12208 9.77851 3.21971L6.16239 6.83582L2.54627 3.21971C2.44864 3.12208 2.29035 3.12208 2.19272 3.21971L1.13206 4.28037C1.03443 4.378 1.03443 4.53629 1.13206 4.63392L5.98561 9.48747Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronDown;
