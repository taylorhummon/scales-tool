import type { Derived } from "src/types";

import Clock from "src/components/Clock";
import KeyDegree from "src/components/KeyDegree";
import KeyDescription from "src/components/KeyDescription";
import ModeNote from "src/components/ModeNote";
import NoteDot from "src/components/NoteDot";
import NoteLabel from "src/components/NoteLabel";
import RootNote from "src/components/RootNote";
import { buildClassString } from "src/utilities/css";
import { arrayFromMap } from "src/utilities/map";

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
        {arrayFromMap(derived.locatedNoteBySolfegeName, (locatedNote, solfegeName) => (
          <NoteDot
            key={solfegeName}
            location={locatedNote.location}
            solfegeName={solfegeName}
          />
        ))}
        {arrayFromMap(derived.locatedNoteBySolfegeName, (locatedNote, solfegeName) => (
          <NoteLabel
            key={solfegeName}
            location={locatedNote.location}
            note={locatedNote.note}
            solfegeName={solfegeName}
          />
        ))}
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
