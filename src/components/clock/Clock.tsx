import type { Note } from "@/classes/Note";
import { ClockFace } from "@/components/clock/ClockFace";
import { KeyDescription } from "@/components/clock/KeyDescription";
import { Labels } from "@/components/clock/Labels";
import { NoteDot } from "@/components/clock/NoteDot";
import { RootDot } from "@/components/clock/RootDot";
import { useDerivedContext } from "@/contexts/derived";
import { arrayFromMap } from "@/utilities/map";

import clockCssModule from "@/components/clock/Clock.module.scss";


export function Clock(
): JSX.Element {
  const { musicalKey } = useDerivedContext();

  return (
    <g className={clockCssModule["clock"]}>
      <RootDot />
      <ClockFace />
      {arrayFromMap(musicalKey.scale, (note: Note) => (
        <NoteDot
          key={note.hour}
          note={note}
        />
      ))}
      <Labels />
      <KeyDescription />
    </g>
  );
}
