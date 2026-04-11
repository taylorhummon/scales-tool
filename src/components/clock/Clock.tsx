import type { AnimationType, Motion } from "@/enumerations";
import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { ClockFace } from "@/components/clock/ClockFace";
import { KeyDescription } from "@/components/clock/KeyDescription";
import { Labels } from "@/components/clock/Labels";
import { NoteDot } from "@/components/clock/NoteDot";
import { RootDot } from "@/components/clock/RootDot";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/clock/Clock.module.scss";


interface ClockProps {
  musicalKey: MusicalKey;
  animationType: AnimationType;
  motion: Motion;
  isUsingSolfege: boolean;
}

export function Clock({
  musicalKey,
  animationType,
  motion,
  isUsingSolfege
}: ClockProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["clock"])}
    >
      <RootDot
        rootNote={musicalKey.rootNote}
        motion={motion}
      />
      <ClockFace />
      {musicalKey.scale.map((note: Note) => (
        <NoteDot
          key={note.hour}
          musicalKey={musicalKey}
          animationType={animationType}
          motion={motion}
          note={note}
        />
      ))}
      <Labels
        musicalKey={musicalKey}
        motion={motion}
        isUsingSolfege={isUsingSolfege}
      />
      <KeyDescription
        musicalKey={musicalKey}
      />
    </g>
  );
}
