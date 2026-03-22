import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/ArrowButton.module.css";


interface ArrowButtonProps {
  isRight: boolean;
  onClick: (() => void) | undefined;
  dataTestid: string;
}

export function ArrowButton({
  isRight,
  onClick,
  dataTestid
}: ArrowButtonProps): JSX.Element {
  const isDisabled = ! onClick;
  const backgroundColor = isDisabled ? "rgb(191, 169, 249)" : "rgb(128, 85, 245)";
  const foregroundColor = isDisabled ? "rgb(230, 210, 255)" : "rgb(255, 255, 255)";
  return (
    <svg
      className={className(isDisabled)}
      onClick={onClick}
      data-testid={dataTestid}
      viewBox="-25 -20 50 40"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="40px"
    >
      <rect
        x="-25"
        y="-20"
        width="50"
        height="40"
        fill={backgroundColor}
        rx="8"
        ry="8"
      />
      <g
        transform={isRight ? "none" : "scale(-1, 1)"}
      >
        <line
          x1="-8"
          y1="0"
          x2="7"
          y2="0"
          strokeWidth="2"
          stroke={foregroundColor}
        />
        <polygon
          points="8,0 5,3 5,-3"
          strokeWidth="2"
          stroke={foregroundColor}
          fill={foregroundColor}
        />
      </g>
    </svg>
  );
}

function className(
  isDisabled: boolean
): string {
  const classNames = ["arrow-button"];
  if (isDisabled) classNames.push("disabled");
  return buildClassString(cssModule, classNames);
}
