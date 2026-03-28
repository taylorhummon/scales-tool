import { Motion } from "src/enumerations";
import { buildLabelAnimation } from "src/classes/LabelAnimation";
import { MusicalKey } from "src/classes/MusicalKey";
import { ClockFace } from "src/components/clock/ClockFace";
import { KeyDescription } from "src/components/clock/KeyDescription";
import { NoteDot } from "src/components/clock/NoteDot";
import { NoteLabel } from "src/components/clock/NoteLabel";
import { RootDot } from "src/components/clock/RootDot";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/clock/Clock.module.css";


interface ClockProps {
  musicalKey: MusicalKey;
  motion: Motion;
}

export function Clock({
  musicalKey,
  motion
}: ClockProps): JSX.Element {
  const labelAnimation = buildLabelAnimation(musicalKey, motion);
  return (
    <g
      className={buildClassString(cssModule, ["clock"])}
    >
      <RootDot
        rootNote={musicalKey.rootNote}
        motion={motion}
      />
      <ClockFace />
      {musicalKey.scale.map((note) => (
        <NoteDot
          key={note.hour}
          note={note}
          motion={motion}
        />
      ))}
      {musicalKey.scale.map((note) => (
        <NoteLabel
          key={note.hour}
          note={note}
          labelAnimation={labelAnimation}
        />
      ))}
      <KeyDescription
        musicalKey={musicalKey}
      />
    </g>
  );
}
