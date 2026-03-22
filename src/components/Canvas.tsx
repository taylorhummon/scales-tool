import type { Dispatch, SetStateAction } from "react";
import { useRef, useEffect } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { Clock } from "src/components/clock/Clock";
import { Slider } from "src/components/slider/Slider";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Canvas.module.css";


interface CanvasProps {
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}


export function Canvas({
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
  }, [setState]);

  return (
    <div
      className={buildClassString(cssModule, ["canvas"])}
      ref={domNodeRef}
    >
      <svg
        className={buildClassString(cssModule, ["canvas-svg"])}
        viewBox="-150 -150 450 300"
        xmlns="http://www.w3.org/2000/svg"
        height="300px"
        width="450px"
      >
        <defs>
          <clipPath
            id="slider-clip-box"
            clipPathUnits="userSpaceOnUse"
          >
            <rect
              x="180"
              y="-130"
              width="120"
              height="250"
            />
          </clipPath>
        </defs>
        <Clock
          derived={derived}
        />
        <Slider
          derived={derived}
        />
      </svg>
    </div>
  );
}
