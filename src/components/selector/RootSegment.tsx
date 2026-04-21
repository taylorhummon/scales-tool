import { useDerivedContext } from "@/contexts/derived";
import { ROOT_SEGMENT_FILL } from "@/utilities/color";
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
      className={buildClassString(cssModule, ["root-segment"])}
      clipPath="url(#root-selector-clip-path)"
    >
      <g
        className={getInnerClassName(position, nextPosition)}
      >
        <path
          d="M -15,105 Q 0,110 15,105 L 15,-105 Q 0,-110 -15,-105 L -15,105"
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
  const classNames = ["root-segment-inner"];
  if (nextPosition === position) {
    classNames.push(`position-${position}`);
  } else {
    classNames.push(`move-from-${position}-to-${nextPosition}`);
  }
  return buildClassString(cssModule, classNames);
}
