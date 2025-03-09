import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
  size?: number | string;
};

const FilterLinesIcon = ({
  className,
  color = "currentColor",
  size = "40",
  ...props
}: IconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 7H10.5M1.75 3.5H12.25M5.25 10.5H8.75"
        stroke="#868E96"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FilterLinesIcon;
