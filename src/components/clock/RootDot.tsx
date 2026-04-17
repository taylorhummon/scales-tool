import type { MusicalKey } from "@/classes/MusicalKey";
import { useDerivedContext } from "@/contexts/derived";
import { ROOT_DOT_STROKE, ROOT_DOT_FILL } from "@/utilities/color";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/RootDot.module.scss";


export function RootDot(
): JSX.Element {
  const { musicalKey, nextMusicalKey } = useDerivedContext();
  return (
    <circle
      className={getClassName(musicalKey, nextMusicalKey)}
      data-testid={"clock-root-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={ROOT_DOT_STROKE}
      fill={ROOT_DOT_FILL}
    />
  );
}

function getClassName(
  musicalKey: MusicalKey,
  nextMusicalKey: MusicalKey
): string {
  const classNames = ["root-dot"];
  const startHour = musicalKey.rootNote.hour;
  const finishHour = nextMusicalKey.rootNote.hour;
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
