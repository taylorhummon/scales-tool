import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/NoteOnSlider.module.css";


interface NoteOnSliderProps {
  note: Note;
}

export function NoteOnSlider({
  note
}: NoteOnSliderProps): JSX.Element {
  return (
    <g
      className={className(note)}
    >
      <text
        className={buildClassString(cssModule, ["note-text"])}
      >
        {note.name}
      </text>
    </g>
  );
}

function className(
  note: Note
): string {
  const classNames = ["note-on-slider", note.name, `position-${note.position}`];
  return buildClassString(cssModule, classNames);
}
