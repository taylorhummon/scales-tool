import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/summary/RootNote.module.css";


interface RootNoteProps {
  rootNoteName: string;
}

export function RootNote({
  rootNoteName
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
        {rootNoteName}
      </div>
    </>
  );
}
