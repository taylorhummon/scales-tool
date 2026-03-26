import { Motion } from "src/enumerations";

interface IconProps {
  motion: Motion;
  isDisabled: boolean;
  isWaiting: boolean;
}

export function Icon({
  motion
}: IconProps): JSX.Element | null {
  if (motion === Motion.DecrementDoPosition) {
    return (
      <>
        <circle
          cx="-6"
          cy="4"
          r="7"
          strokeWidth={1.2}
          stroke="rgb(4, 51, 255)"
          fill="rgb(208, 214, 253)"
        />
        <line
          x1="3"
          y1="-3"
          x2="12"
          y2="-11"
          strokeWidth={1}
          stroke="rgb(110, 110, 110)"
        />
        <line
          x1="5"
          y1="0"
          x2="14"
          y2="-8"
          strokeWidth={1}
          stroke="rgb(110, 110, 110)"
        />
        <line
          x1="-1"
          y1="-4"
          x2="8"
          y2="-12"
          strokeWidth={1}
          stroke="rgb(110, 110, 110)"
        />
      </>
    );
  }
  if (motion === Motion.IncrementDoPosition) {
    return (
      <>
        <circle
          cx="6"
          cy="-4"
          r="7"
          strokeWidth={1.2}
          stroke="rgb(4, 51, 255)"
          fill="rgb(208, 214, 253)"
        />
        <line
          x1="-3"
          y1="3"
          x2="-12"
          y2="11"
          strokeWidth={1}
          stroke="rgb(110, 110, 110)"
        />
        <line
          x1="-5"
          y1="0"
          x2="-14"
          y2="8"
          strokeWidth={1}
          stroke="rgb(110, 110, 110)"
        />
        <line
          x1="1"
          y1="4"
          x2="-8"
          y2="12"
          strokeWidth={1}
          stroke="rgb(110, 110, 110)"
        />
      </>
    );
  }
  if (motion === Motion.DecrementKeyDegree) {
    return (
      <text
        x="0"
        y="0"
        alignmentBaseline="central"
        textAnchor="middle"
        fill="black"
        fontFamily="PT Mono"
        fontSize="22px"
      >
        ♭
      </text>
    );
  }
  if (motion === Motion.IncrementKeyDegree) {
    return (
      <text
        x="0"
        y="0"
        alignmentBaseline="central"
        textAnchor="middle"
        fill="black"
        fontFamily="PT Mono"
        fontSize="22px"
      >
        ♯
      </text>
    );
  }
  if (motion === Motion.DecrementBoth) {
    return (
      <polygon
        points="-20,-8 0,8 20,-8 0,5"
        fill="black"
        stroke="black"
        strokeWidth="1"
      />
    );
  }
  if (motion === Motion.IncrementBoth) {
    return (
      <polyline
        points="-20,8 0,-8 20,8 0,-5"
        fill="black"
        stroke="black"
        strokeWidth="1"
      />
    );
  }
  return null;
}
