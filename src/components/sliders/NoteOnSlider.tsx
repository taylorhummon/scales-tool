import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/NoteOnSlider.module.css";


interface NoteOnSliderProps {
  note: Note;
  motion: Motion;
}

export function NoteOnSlider({
  note,
  motion
}: NoteOnSliderProps): JSX.Element {
  return (
    <g
      className={className(note, motion)}
    >
      <text>
        {note.name}
      </text>
    </g>
  );
}


function className(
  note: Note,
  motion: Motion
): string {
  const classNames = ["note-on-slider", note.name];
  const position = note.position;
  if (
    motion === Motion.DecrementRight ||
    motion === Motion.DecrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${position}-to-${position - 1}`);
  } else if (
    motion === Motion.IncrementRight ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${position}-to-${position + 1}`);
  } else {
    classNames.push(`position-${position}`);
  }
  return buildClassString(cssModule, classNames);
}
