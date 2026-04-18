import type { MusicalKey } from "@/classes/MusicalKey";
import { useDerivedContext } from "@/contexts/derived";
import { GAUGE_TRIANGLE_STROKE, GAUGE_TRIANGLE_FILL } from "@/utilities/color";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/gauge/Triangle.module.scss";


export function Triangle(
): JSX.Element | null {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  return (
    <polygon
      className={getClassName(musicalKey, nextMusicalKey)}
      points="-6,-6 -24,0 -24,-12"
      strokeWidth="1.2"
      stroke={GAUGE_TRIANGLE_STROKE}
      fill={GAUGE_TRIANGLE_FILL}
    />
  );
}

function getClassName(
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey
): string {
  const classNames = ["triangle"];
  const mode = musicalKey.mode;
  const nextMode = nextMusicalKey.mode;
  if (nextMode === mode) {
    classNames.push(`position-${mode}`);
  } else {
    classNames.push(`move-from-${mode}-to-${nextMode}`);
  }
  return buildClassString(cssModule, classNames);
}
