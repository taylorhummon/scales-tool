import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/slider/LocatedNote.module.css";


interface LocatedNoteProps {
  note: Note;
  location: number;
}

export function LocatedNote({
  note,
  location
}: LocatedNoteProps): JSX.Element {
  return (
    <text
      className={className(note, location)}
    >
      {note.name}
    </text>
  );
}


function className(
  note: Note,
  location: number
): string {
  const classNames = ["located-note", note.name, `location-${location}`];
  return buildClassString(cssModule, classNames);
}
