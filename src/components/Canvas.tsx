import type { Dispatch, SetStateAction } from "react";
import { useRef, useEffect } from "react";

import type { State, Derived } from "src/types";
import { Key } from "src/components/Key";
import { Clock } from "src/components/clock/Clock";
import { Sliders } from "src/components/sliders/Sliders";
import { buildClassString } from "src/utilities/css";
import { updateStateAtEndOfAnimation } from "src/utilities/action";

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
      setState(updateStateAtEndOfAnimation);
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
        viewBox="0 -220 440 440"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Sliders
          derived={derived}
          setState={setState}
        />
        <Clock
          derived={derived}
        />
        <Key
          modeNote={derived.modeNote}
          rootNote={derived.rootNote}
        />
      </svg>
    </div>
  );
}
