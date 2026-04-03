import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/NoteOnSlider.module.css";


interface NoteOnSliderProps {
  note: Note;
}

export function NoteOnSlider({
  note
}: NoteOnSliderProps): JSX.Element {
  return (
    <g
      className={getClassName(note)}
    >
      <text
        className={buildClassString(cssModule, ["note-text"])}
      >
        {note.name}
      </text>
    </g>
  );
}

function getClassName(
  note: Note
): string {
  const classNames = ["note-on-slider", note.name, `position-${note.position}`];
  return buildClassString(cssModule, classNames);
}
