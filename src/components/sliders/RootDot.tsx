import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/RootDot.module.css";


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
      data-testid={"slider-root-dot"}
      cx="0"
      cy="0"
      r="4"
      strokeWidth={1.1}
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
  classNames.push(`position-${rootNote.position}`);
  if (
    motion === Motion.Still ||
    motion === Motion.DecrementDegree ||
    motion === Motion.IncrementDegree
  ) {
    classNames.push(`position-${rootNote.position}`);
  } else if (
    motion === Motion.IncrementMode ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${rootNote.position}-to-${rootNote.position + 1}`);
  } else if (
    motion === Motion.DecrementMode ||
    motion === Motion.DecrementBoth
   ) {
    classNames.push("move");
    classNames.push(`from-${rootNote.position}-to-${rootNote.position - 1}`);
  }
  return buildClassString(cssModule, classNames);
}
