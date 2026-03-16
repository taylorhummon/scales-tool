import type { Derived } from "src/types";

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
        {derived.notes.map((note) => (
          <NoteDot
            key={note.name + note.hour.toString()}
            motion={derived.motion}
            noteHour={note.hour}
            isRoot={note.hour === derived.rootNoteHour}
          />
        ))}
        {derived.notes.map((note) => (
          <NoteLabel
            key={note.name + note.hour.toString()}
            noteName={note.name}
            noteHour={note.hour}
            solfege={note.solfege}
          />
        ))}
        <RootDot
          motion={derived.motion}
          rootNoteHour={derived.rootNoteHour}
        />
      </svg>
      <div
        className={buildClassString(cssModule, ["grid"])}
      >
        <KeyDescription
          mode={derived.mode}
          rootNoteName={derived.rootNoteName}
        />
        <RootNote
          rootNoteName={derived.rootNoteName}
          buildChangeRoot={buildChangeRoot}
        />
        <ModeNote
          modeNoteName={derived.modeNoteName}
          buildChangeMode={buildChangeMode}
        />
        <KeyDegree
          keyDegree={derived.keyDegree}
        />
      </div>
    </>
  )
};
