import { Motion } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";
import { getRootDotFinishHour } from "@/utilities/motion";

import cssModule from "@/components/clock/RootDot.module.css";


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
      className={className(rootNote, motion)}
      data-testid={"clock-root-dot"}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.3"
      stroke="rgb(4, 51, 255)"
      fill="rgb(208, 214, 253)"
    />
  );
}

function className(
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
