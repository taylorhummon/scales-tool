import { NaturalNoteName } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/ModeNote.module.css";


interface ModeNoteProps {
  modeNoteName: NaturalNoteName;
}

export function ModeNote({
  modeNoteName
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
        {modeNoteName}
      </div>
    </>
  );
}
