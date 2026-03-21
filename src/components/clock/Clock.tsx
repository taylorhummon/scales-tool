import { Motion } from "src/enumerations";
import type { Derived } from "src/types";
import { LabelAnimation } from "src/classes/LabelAnimation";
import { NoteDot } from "src/components/clock/NoteDot";
import { NoteLabel } from "src/components/clock/NoteLabel";
import { RootDot } from "src/components/clock/RootDot";
import { Tick } from "src/components/clock/Tick";
import { buildIndicesArray } from "src/utilities/array";
import { CLOCK_RADIUS } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/clock/Clock.module.css";


interface ClockProps {
  derived: Derived;
}

export function Clock({
  derived
}: ClockProps): JSX.Element {
  return (
    <svg
      className={buildClassString(cssModule, ["clock"])}
      viewBox="-150 -150 300 300"
      xmlns="http://www.w3.org/2000/svg"
      height="300px"
      width="300px"
    >
      {buildIndicesArray(12).map((hour) =>
        <Tick
          key={hour}
          hour={hour}
        />
      )}
      <circle
        className={buildClassString(cssModule, ["clock-circle"])}
        cx="0"
        cy="0"
        r={CLOCK_RADIUS}
      />
      {derived.notes.map((note) => (
        <NoteLabel
          key={note.name}
          labelAnimation={getLabelAnimation(derived)}
          note={note}
          solfege={note.solfege}
        />
      ))}
      {derived.notes.map((note) => (
        <NoteDot
          key={note.name}
          motion={derived.motion}
          note={note}
          solfege={note.solfege}
        />
      ))}
      <RootDot
        motion={derived.motion}
        rootNoteHour={derived.rootNote.hour}
      />
    </svg>
  );
}

function getLabelAnimation(
  derived: Derived
): LabelAnimation | null {
  if (derived.motion === Motion.Still) return null;
  return new LabelAnimation(derived.motion, derived.root, derived.mode);
}
