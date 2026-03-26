import { NaturalNote } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/summary/ModeNote.module.css";


interface ModeNoteProps {
  modeNote: NaturalNote;
}

export function ModeNote({
  modeNote
}: ModeNoteProps): JSX.Element {
  return (
    <>
      <div
        className={buildClassString(cssModule, ["mode-note-label"])}
      >
        mode note:
      </div>
      <div
        className={buildClassString(cssModule, ["mode-note-content"])}
      >
        {modeNote}
      </div>
    </>
  );
}
