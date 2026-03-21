import { useRef, useEffect, Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { LabelAnimation } from "src/classes/LabelAnimation";
import { NoteDot } from "src/components/clock/NoteDot";
import { NoteLabel } from "src/components/clock/NoteLabel";
import { RootDot } from "src/components/clock/RootDot";
import { Tick } from "src/components/clock/Tick";
import { buildIndicesArray } from "src/utilities/array";
import { CLOCK_RADIUS } from "src/utilities/clock";
import { buildClassString } from "src/utilities/css";
import { arrayFromMap } from "src/utilities/map";

import cssModule from "src/components/clock/Clock.module.css";


interface ClockProps {
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}

export function Clock({
  derived,
  setState
}: ClockProps): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function animationEndHandler(): void {
      setState((state: State) => {
        if (state.motion === Motion.IncrementRoot) {
          return { ...state, motion: Motion.Still, root: state.root + 1 };
        }
        if (state.motion === Motion.DecrementRoot) {
          return { ...state, motion: Motion.Still, root: state.root - 1 };
        }
        if (state.motion === Motion.IncrementMode) {
          return { ...state, motion: Motion.Still, mode: state.mode + 1 };
        }
        if (state.motion === Motion.DecrementMode) {
          return { ...state, motion: Motion.Still, mode: state.mode - 1 };
        }
        return state;
      });
    }

    const domNode = domNodeRef.current;
    if (domNode) domNode.addEventListener("animationend", animationEndHandler, false);
    return () => {
      if (domNode) domNode.removeEventListener("animationend", animationEndHandler);
    };
  }, [setState]);

  return (
    <div
      ref={domNodeRef}
      className={buildClassString(cssModule, ["canvas"])}
    >
      <svg
        viewBox="-150 -150 300 300"
        xmlns="http://www.w3.org/2000/svg"
        height="300px"
        width="300px"
      >
        {buildIndicesArray(12).map((hour) => Tick({ hour }))}
        <circle
          className={buildClassString(cssModule, ["clock"])}
          cx="0"
          cy="0"
          r={CLOCK_RADIUS}
        />
        {arrayFromMap(derived.noteBySolfege, (note, solfege) => (
          <NoteLabel
            key={note.name}
            labelAnimation={getLabelAnimation(derived)}
            note={note}
            solfege={solfege}
          />
        ))}
        {arrayFromMap(derived.noteBySolfege, (note, solfege) => (
          <NoteDot
            key={note.name}
            motion={derived.motion}
            note={note}
            solfege={solfege}
          />
        ))}
        <RootDot
          motion={derived.motion}
          rootNoteHour={derived.rootNote.hour}
        />
      </svg>
    </div>
  )
};

function getLabelAnimation(
  derived: Derived
): LabelAnimation | null {
  if (derived.motion === Motion.Still) return null;
  return new LabelAnimation(derived.motion, derived.root, derived.mode);
}
