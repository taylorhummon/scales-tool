import type { Note } from "src/classes/Note";
import { NaturalNote } from "src/enumerations";
import { KeyDegree } from "src/components/summary/KeyDegree";
import { KeyDescription } from "src/components/summary/KeyDescription";
import { ModeNote } from "src/components/summary/ModeNote";
import { RootNote } from "src/components/summary/RootNote";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/summary/Summary.module.css";


interface SummaryProps{
  keyDegree: number;
  modeNote: NaturalNote;
  rootNote: Note;
  isEnabled: boolean;
}

export function Summary({
  keyDegree,
  modeNote,
  rootNote,
  isEnabled
}: SummaryProps): JSX.Element | null {
  if (! isEnabled) return null;
  return (
    <div
      className={buildClassString(cssModule, ["summary"])}
    >
      <KeyDescription
        modeNote={modeNote}
        rootNote={rootNote}
      />
      <KeyDegree
        keyDegree={keyDegree}
      />
      <ModeNote
        modeNote={modeNote}
      />
      <RootNote
        rootNote={rootNote}
      />
    </div>
  );
}
