import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/slider/LocatedNote.module.css";


interface LocatedNoteProps {
  motion: Motion;
  note: Note;
}

export function LocatedNote({
  motion,
  note
}: LocatedNoteProps): JSX.Element {
  return (
    <g
      className={className(motion, note)}
    >
      <text>
        {note.name}
      </text>
    </g>
  );
}


function className(
  motion: Motion,
  note: Note
): string {
  const classNames = ["located-note", note.name];
  const location = note.location;
  if (motion === Motion.IncrementRoot) {
    classNames.push("move");
    classNames.push(`from-${location}-to-${location - 1}`);
  } else if (motion === Motion.DecrementRoot) {
    classNames.push("move");
    classNames.push(`from-${location}-to-${location + 1}`);
  } else if (motion === Motion.IncrementMode) {
    classNames.push("move");
    classNames.push(`from-${location}-to-${location + 1}`);
  } else if (motion === Motion.DecrementMode) {
    classNames.push("move");
    classNames.push(`from-${location}-to-${location - 1}`);
  } else {
    classNames.push(`location-${location}`);
  }
  return buildClassString(cssModule, classNames);
}
