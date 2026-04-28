import {
  ROOT_DOT_STROKE,
  ROOT_DOT_FILL,
  ICON_MOTION_STROKE,
} from "@/utilities/color";
import { Motion } from "@/utilities/motion";


interface IconProps {
  motion: Motion;
  className?: string;
}

export function Icon({
  motion,
  className,
}: IconProps): JSX.Element | null {
  if (motion === Motion.IncrementRoot) {
    return (
      <g className={className}>
        <circle
          cx="6"
          cy="-4"
          r="7"
          strokeWidth="1.2"
          stroke={ROOT_DOT_STROKE}
          fill={ROOT_DOT_FILL}
        />
        <line
          x1="-3"
          y1="3"
          x2="-12"
          y2="11"
          strokeWidth="1"
          stroke={ICON_MOTION_STROKE}
        />
        <line
          x1="-5"
          y1="0"
          x2="-14"
          y2="8"
          strokeWidth="1"
          stroke={ICON_MOTION_STROKE}
        />
        <line
          x1="1"
          y1="4"
          x2="-8"
          y2="12"
          strokeWidth="1"
          stroke={ICON_MOTION_STROKE}
        />
      </g>
    );
  }
  if (motion === Motion.DecrementRoot) {
    return (
      <g className={className}>
        <circle
          cx="-6"
          cy="4"
          r="7"
          strokeWidth="1.2"
          stroke={ROOT_DOT_STROKE}
          fill={ROOT_DOT_FILL}
        />
        <line
          x1="3"
          y1="-3"
          x2="12"
          y2="-11"
          strokeWidth="1"
          stroke={ICON_MOTION_STROKE}
        />
        <line
          x1="5"
          y1="0"
          x2="14"
          y2="-8"
          strokeWidth="1"
          stroke={ICON_MOTION_STROKE}
        />
        <line
          x1="-1"
          y1="-4"
          x2="8"
          y2="-12"
          strokeWidth="1"
          stroke={ICON_MOTION_STROKE}
        />
      </g>
    );
  }
  if (motion === Motion.IncrementDegree) {
    return (
      <g className={className}>
        <line
          x1="1.5"
          y1="-8.5"
          x2="1.5"
          y2="4.7"
          strokeWidth="0.8"
          stroke="black"
        />
        <line
          x1="-2"
          y1="-6.5"
          x2="-2"
          y2="6.7"
          strokeWidth="0.8"
          stroke="black"
        />
        <polygon
          points="-3.5,3.5 3.5,0 3.5,0.3 -3.5,3.8"
          strokeWidth="1.5"
          stroke="black"
        />
        <polygon
          points="-3.5,-1.5 3.5,-5 3.5,-4.7 -3.5,-1.2"
          strokeWidth="1.5"
          stroke="black"
        />
      </g>
    );
  }
  if (motion === Motion.DecrementDegree) {
    return (
      <g className={className}>
        <line
          x1="-2.5"
          y1="-8.5"
          x2="-2.5"
          y2="6.5"
          strokeWidth="0.8"
          stroke="black"
        />
        <path
          fill="black"
          stroke="black"
          strokeWidth="1.5"
          d="m -2.5,6.5 c 0,0 6.8039886,-3.502052 5.1449035,-5.77124323 -1.67644584,-2.29293637 -5.1005164,0.80130563 -5.1005164,0.80130563 0,0 3.23252528,-2.5530565 4.4272078,-0.62375756 C 3.3102876,3.0681666 -2.5,6.5 -2.5,6.5 Z"
        />
      </g>
    );
  }
  if (motion === Motion.IncrementBoth) {
    return (
      <g className={className}>
        <polyline
          points="-14,7 0,-7 14,7 0,-4"
          strokeWidth="1"
          stroke="black"
          fill="black"
        />
      </g>
    );
  }
  if (motion === Motion.DecrementBoth) {
    return (
      <g className={className}>
        <polygon
          points="-14,-7 0,7 14,-8 0,4"
          strokeWidth="1"
          stroke="black"
          fill="black"
        />
      </g>
    );
  }
  return null;
}
