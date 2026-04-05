import { ROOT_DOT_STROKE_COLOR, ROOT_DOT_FILL_COLOR } from "@/config";
import { Motion } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { getRootDotFinishHour } from "@/utilities/motion";

import cssModule from "@/components/clock/RootDot.module.scss";


interface RootDotProps {
  rootNote: Note;
  motion: Motion;
}

export function RootDot({
  rootNote,
  motion
}: RootDotProps): JSX.Element {
  return (
    <circle
      className={getClassName(rootNote, motion)}
      data-testid={"clock-root-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.3"
      stroke={ROOT_DOT_STROKE_COLOR}
      fill={ROOT_DOT_FILL_COLOR}
    />
  );
}

function getClassName(
  rootNote: Note,
  motion: Motion
): string {
  const classNames = ["root-dot"];
  const startHour = rootNote.hour;
  const finishHour = getRootDotFinishHour(rootNote, motion);
  if (finishHour === startHour) {
    classNames.push(`hour-${rootNote.hour}`);
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`);
  }
  return buildClassString(cssModule, classNames);
}
