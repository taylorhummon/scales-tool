import type { Derived } from "src/types";
import { buildLabelAnimation } from "src/classes/LabelAnimation";
import { ClockFace } from "src/components/clock/ClockFace";
import { NoteDot } from "src/components/clock/NoteDot";
import { NoteLabel } from "src/components/clock/NoteLabel";
import { RootDot } from "src/components/clock/RootDot";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/clock/Clock.module.css";


interface ClockProps {
  derived: Derived;
}

export function Clock({
  derived
}: ClockProps): JSX.Element {
  const labelAnimation = buildLabelAnimation(derived);
  return (
    <g
      className={buildClassString(cssModule, ["clock"])}
    >
      <RootDot
        motion={derived.motion}
        rootNote={derived.rootNote}
      />
      <ClockFace />
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
