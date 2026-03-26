import type { Derived } from "src/types";
import { buildLabelAnimation } from "src/classes/LabelAnimation";
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
  const labelAnimation = buildLabelAnimation(derived.motion, derived.doPosition, derived.keyDegree);
  return (
    <g
      className={buildClassString(cssModule, ["clock"])}
    >
      <RootDot
        motion={derived.motion}
        rootNote={derived.rootNote}
      />
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
      {derived.scale.map((note) => (
        <NoteDot
          key={note.name}
          motion={derived.motion}
          note={note}
        />
      ))}
      {derived.scale.map((note) => (
        <NoteLabel
          key={note.name}
          labelAnimation={labelAnimation}
          note={note}
        />
      ))}
    </g>
  );
}
