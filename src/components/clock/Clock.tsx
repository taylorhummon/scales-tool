import type { Motion } from "@/enumerations";
import { buildLabelAnimation } from "@/classes/LabelAnimation";
import type { MusicalKey } from "@/classes/MusicalKey";
import { ClockFace } from "@/components/clock/ClockFace";
import { KeyDescription } from "@/components/clock/KeyDescription";
import { NoteDot } from "@/components/clock/NoteDot";
import { NoteLabel } from "@/components/clock/NoteLabel";
import { RootDot } from "@/components/clock/RootDot";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/Clock.module.scss";


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
