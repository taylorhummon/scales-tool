import type { Derived } from "src/types";
import { KeyDegree } from "src/components/summary/KeyDegree";
import { KeyDescription } from "src/components/summary/KeyDescription";
import { ModeNote } from "src/components/summary/ModeNote";
import { RootNote } from "src/components/summary/RootNote";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/summary/Summary.module.css";


interface SummaryProps{
  derived: Derived;
}

export function Summary({
  derived
}: SummaryProps): JSX.Element {

  return (
    <div
      className={buildClassString(cssModule, ["summary"])}
    >
      <KeyDescription
        mode={derived.mode}
        rootNoteName={derived.rootNote.name}
      />
      <KeyDegree
        keyDegree={derived.keyDegree}
      />
      <ModeNote
        modeNoteName={derived.modeNoteName}
      />
      <RootNote
        rootNoteName={derived.rootNote.name}
      />
    </div>
  );
}
