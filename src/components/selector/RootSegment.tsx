import { useDerivedContext } from "@/contexts/derived";
import { SEGMENT_FILL } from "@/utilities/color";
import { buildClassName } from "@/utilities/css";

import segmentCssModule from "@/components/selector/Segment.module.scss";


export function RootSegment(
): JSX.Element | null {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  const position = - musicalKey.mode;
  const nextPosition = - nextMusicalKey.mode;
  if (position > 4 || position < -4) return null;
  return (
    <g
      className={segmentCssModule["root-segment"]}
      clipPath="url(#root-selector-clip-path)"
    >
      <g
        className={getInnerClassName(position, nextPosition)}
      >
        <path
          d="M -17,105 Q 0,110 17,105 L 17,-105 Q 0,-110 -17,-105 L -17,105"
          fill={SEGMENT_FILL}
        />
      </g>
    </g>
  );
}

function getInnerClassName(
  position: number,
  nextPosition: number
): string {
  const classNames = ["segment-inner"];
  if (nextPosition === position) {
    classNames.push(`position-${position}`);
  } else {
    classNames.push(`move-from-${position}-to-${nextPosition}`);
  }
  return buildClassName(segmentCssModule, classNames);
}
