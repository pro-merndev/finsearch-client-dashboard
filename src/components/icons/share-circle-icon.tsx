import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
  size?: number | string;
};

export function ShareCircleIcon({
  className,
  color = "currentColor",
  size = "40",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.3" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="white"
        strokeOpacity="0.4"
      />
      <path
        d="M27.3261 20.5062C27.5296 20.3318 27.6313 20.2446 27.6686 20.1409C27.7013 20.0498 27.7013 19.9502 27.6686 19.8591C27.6313 19.7554 27.5296 19.6682 27.3261 19.4938L20.2672 13.4433C19.917 13.1431 19.7419 12.9931 19.5937 12.9894C19.4648 12.9862 19.3418 13.0428 19.2603 13.1427C19.1667 13.2576 19.1667 13.4883 19.1667 13.9495V17.5289C17.3878 17.8401 15.7597 18.7415 14.5498 20.0949C13.2307 21.5704 12.501 23.48 12.5 25.4591V25.9691C13.3745 24.9157 14.4663 24.0638 15.7006 23.4716C16.7889 22.9495 17.9653 22.6403 19.1667 22.5588V26.0505C19.1667 26.5117 19.1667 26.7424 19.2603 26.8573C19.3418 26.9572 19.4648 27.0138 19.5937 27.0106C19.7419 27.0069 19.917 26.8569 20.2672 26.5567L27.3261 20.5062Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

