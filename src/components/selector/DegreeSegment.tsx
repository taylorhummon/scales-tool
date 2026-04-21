import { useDerivedContext } from "@/contexts/derived";
import { ROOT_SEGMENT_FILL } from "@/utilities/color";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/selector/DegreeSegment.module.scss";


export function DegreeSegment(
): JSX.Element | null {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const position = musicalKey.mode;
  const nextPosition = nextMusicalKey.mode;
  if (position > 4 || position < -4) return null;
  return (
    <g
      className={buildClassString(cssModule, ["degree-segment"])}
      clipPath="url(#degree-selector-clip-path)"
    >
      <g
        className={getInnerClassName(position, nextPosition)}
      >
        <path
          d="M -17,105 Q 0,110 17,105 L 17,-105 Q 0,-110 -17,-105 L -17,105"
          fill={ROOT_SEGMENT_FILL}
        />
      </g>
    </g>
  );
}

function getInnerClassName(
  position: number,
  nextPosition: number
): string {
  const classNames = ["degree-segment-inner"];
  if (nextPosition === position) {
    classNames.push(`position-${position}`);
  } else {
    classNames.push(`move-from-${position}-to-${nextPosition}`);
  }
  return buildClassString(cssModule, classNames);
}
