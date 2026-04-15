import type { MusicalKey } from "@/classes/MusicalKey";
import { useDerivedContext } from "@/contexts/derived";
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
      stroke="rgb(129, 49, 71)"
      fill="rgb(242, 169, 60)"
    />
  );
}

function getClassName(
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey
): string {
  const classNames = ["triangle"];
  if (nextMusicalKey.mode === musicalKey.mode) {
    classNames.push(`position-${musicalKey.mode}`);
  } else {
    classNames.push(`move-from-${musicalKey.mode}-to-${nextMusicalKey.mode}`);
  }
  return buildClassString(cssModule, classNames);
}
