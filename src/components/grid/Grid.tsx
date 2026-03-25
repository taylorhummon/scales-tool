import type { Derived } from "src/types";
import { KeyDegree } from "src/components/grid/KeyDegree";
import { KeyDescription } from "src/components/grid/KeyDescription";
import { ModeNote } from "src/components/grid/ModeNote";
import { RootNote } from "src/components/grid/RootNote";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/grid/Grid.module.css";


interface GridProps{
  derived: Derived;
}

export function Grid({
  derived
}: GridProps): JSX.Element {

  return (
    <div
      className={buildClassString(cssModule, ["grid"])}
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
