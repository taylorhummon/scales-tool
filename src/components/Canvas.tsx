import { useRef, useEffect, Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { LabelAnimation } from "src/classes/label_animation";
import Clock from "src/components/Clock";
import NoteDot from "src/components/NoteDot";
import NoteLabel from "src/components/NoteLabel";
import RootDot from "src/components/RootDot";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Canvas.module.css";


interface CanvasProps {
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}

export default function Canvas({
  derived,
  setState
}: CanvasProps): JSX.Element {
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
  }, []);

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
        <Clock />
        {[...derived.noteBySolfege].map(([solfege, note], _) => (
          <NoteDot
            key={note.name}
            motion={derived.motion}
            note={note}
            solfege={solfege}
          />
        ))}
        {[...derived.noteBySolfege].map(([solfege, note], _) => (
          <NoteLabel
            key={note.name}
            labelAnimation={getLabelAnimation(derived)}
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
