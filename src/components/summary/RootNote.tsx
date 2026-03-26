import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/summary/RootNote.module.css";


interface RootNoteProps {
  rootNote: Note;
}

export function RootNote({
  rootNote
}: RootNoteProps): JSX.Element {
  return (
    <>
      <div
        className={buildClassString(cssModule, ["root-note-label"])}
      >
        root note:
      </div>
      <div
        className={buildClassString(cssModule, ["root-note-content"])}
      >
        {rootNote.name}
      </div>
    </>
  );
}
