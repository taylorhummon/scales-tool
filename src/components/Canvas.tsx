import type { Derived } from "src/types";

import { Motion } from "src/enumerations";
import Clock from "src/components/Clock";
import KeyDegree from "src/components/KeyDegree";
import KeyDescription from "src/components/KeyDescription";
import ModeNote from "src/components/ModeNote";
import NoteDot from "src/components/NoteDot";
import NoteLabel from "src/components/NoteLabel";
import RootDot from "src/components/RootDot";
import RootNote from "src/components/RootNote";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Canvas.module.css";


interface CanvasProps {
  derived: Derived;
  buildChangeRoot: (isIncrement: boolean) => ((() => void) | undefined);
  buildChangeMode: (isIncrement: boolean) => ((() => void) | undefined);
}

export default function Canvas({
  derived,
  buildChangeRoot,
  buildChangeMode
}: CanvasProps): JSX.Element {
  return (
    <>
      <svg
        viewBox="-150 -150 300 300"
        xmlns="http://www.w3.org/2000/svg"
        height="300px"
        width="300px"
      >
        <Clock />
        {derived.locatedNotes.map((locatedNote) => (
          <NoteDot
            key={locatedNote.note + locatedNote.hour.toString()}
            motion={Motion.Still}
            hour={locatedNote.hour}
            nextHour={locatedNote.hour}
          />
        ))}
        {derived.locatedNotes.map((locatedNote) => (
          <NoteLabel
            key={locatedNote.note + locatedNote.hour.toString()}
            hour={locatedNote.hour}
            note={locatedNote.note}
            solfegeName={locatedNote.solfegeName}
          />
        ))}
        <RootDot
          motion={derived.motion}
          rootHour={derived.rootHour}
          nextRootHour={derived.nextRootHour}
        />
      </svg>
      <div
        className={buildClassString(cssModule, ["grid"])}
      >
        <KeyDescription
          modeNumber={derived.modeNumber}
          rootNote={derived.rootNote}
        />
        <RootNote
          rootNote={derived.rootNote}
          buildChangeRoot={buildChangeRoot}
        />
        <ModeNote
          modeNote={derived.modeNote}
          buildChangeMode={buildChangeMode}
        />
        <KeyDegree
          keyDegree={derived.keyDegree}
        />
      </div>
    </>
  )
};
