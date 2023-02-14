import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string | number;
}

const List = ({ size = 24, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6.5C21 6.77614 20.7761 7 20.5 7H3.5C3.22386 7 3 6.77614 3 6.5V5.5C3 5.22386 3.22386 5 3.5 5H20.5C20.7761 5 21 5.22386 21 5.5V6.5Z"
        fill="currentColor"
      />
      <path
        d="M21 12.5C21 12.7761 20.7761 13 20.5 13H3.5C3.22386 13 3 12.7761 3 12.5V11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5V12.5Z"
        fill="currentColor"
      />
      <path
        d="M21 18.5C21 18.7761 20.7761 19 20.5 19H3.5C3.22386 19 3 18.7761 3 18.5V17.5C3 17.2239 3.22386 17 3.5 17H20.5C20.7761 17 21 17.2239 21 17.5V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default List;
