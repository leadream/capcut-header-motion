import React, { SVGAttributes } from 'react'

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string | number;
}

const ThinChevronDown = ({size=24, ...props}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
    </svg>
  )
};

export default ThinChevronDown
