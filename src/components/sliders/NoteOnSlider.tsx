import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/NoteOnSlider.module.css";


interface NoteOnSliderProps {
  motion: Motion;
  note: Note;
}

export function NoteOnSlider({
  motion,
  note
}: NoteOnSliderProps): JSX.Element {
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
  const classNames = ["note-on-slider", note.name];
  const position = note.position;
  if (
    motion === Motion.DecrementKeyDegree ||
    motion === Motion.DecrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${position}-to-${position - 1}`);
  } else if (
    motion === Motion.IncrementKeyDegree ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${position}-to-${position + 1}`);
  } else {
    classNames.push(`position-${position}`);
  }
  return buildClassString(cssModule, classNames);
}
