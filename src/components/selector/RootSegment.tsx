import { useDerivedContext } from "@/contexts/derived";
import { ROOT_SEGMENT_STROKE, ROOT_SEGMENT_FILL } from "@/utilities/color";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/selector/RootSegment.module.scss";


export function RootSegment(
): JSX.Element | null {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const position = musicalKey.middlePosition;
  const nextPosition = nextMusicalKey.middlePosition;
  if (position > 4 || position < -4) return null;
  return (
    <g
      className={getClassName(position, nextPosition)}
    >
      <path
        d="M -15,105 Q 0,110 15,105 L 15,-105 Q 0,-110 -15,-105 L -15,105"
        fill={ROOT_SEGMENT_FILL}
      />
      <path
        d="M -15,-105 Q 0,-110 15,-105"
        stroke={ROOT_SEGMENT_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M -15,105 Q 0,110 15,105"
        stroke={ROOT_SEGMENT_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function getClassName(
  position: number,
  nextPosition: number
): string {
  const classNames = ["root-segment"];
  if (nextPosition === position) {
    classNames.push(`position-${position}`);
  } else {
    classNames.push(`move-from-${position}-to-${nextPosition}`);
  }
  return buildClassString(cssModule, classNames);
}
