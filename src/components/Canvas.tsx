import type { Dispatch, SetStateAction } from "react";
import { useRef, useEffect } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { MusicalKey } from "src/classes/MusicalKey";
import { KeyDescription } from "src/components/KeyDescription";
import { Clock } from "src/components/clock/Clock";
import { Sliders } from "src/components/sliders/Sliders";
import { buildClassString } from "src/utilities/css";
import { updateStateAtEndOfAnimation } from "src/utilities/action";

import cssModule from "src/components/Canvas.module.css";


interface CanvasProps {
  musicalKey: MusicalKey;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
}


export function Canvas({
  musicalKey,
  motion,
  setState
}: CanvasProps): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const animationsCountRef = useRef<number>(0);

  useEffect(() => {
    function animationStartHandler(): void {
      animationsCountRef.current += 1;
    }
    const domNode = domNodeRef.current;
    if (domNode) domNode.addEventListener("animationstart", animationStartHandler, false);
    return () => {
      if (domNode) domNode.removeEventListener("animationstart", animationStartHandler);
    };
  });

  useEffect(() => {
    function animationEndHandler(): void {
      animationsCountRef.current -= 1;
      if (animationsCountRef.current >= 1) return;
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
          musicalKey={musicalKey}
          motion={motion}
          setState={setState}
        />
        <Clock
          musicalKey={musicalKey}
          motion={motion}
        />
        <KeyDescription
          musicalKey={musicalKey}
        />
      </svg>
    </div>
  );
}
