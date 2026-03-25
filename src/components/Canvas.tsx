import type { Dispatch, SetStateAction } from "react";
import { useRef, useEffect } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { Button } from "src/components/slider/Button";
import { Clock } from "src/components/clock/Clock";
import { Slider } from "src/components/slider/Slider";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/Canvas.module.css";


const MAX_KEY_DEGREE = 14;


interface CanvasProps {
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}


export function Canvas({
  derived,
  setState
}: CanvasProps): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const isWaiting = derived.motion !== Motion.Still;

  function buildChangeRoot(
    isIncrement: boolean
  ): (() => void) | undefined {
    if (isIncrement) {
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        if (derived.motion !== Motion.Still) return;
        setState((state: State) => ({ ...state, motion: Motion.IncrementRoot }));
      }
    } else {
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        if (derived.motion !== Motion.Still) return;
        setState((state: State) => ({ ...state, motion: Motion.DecrementRoot }));
      }
    }
  }

  function buildChangeMode(
    isIncrement: boolean
  ): (() => void) | undefined {
    if (isIncrement) {
      if (derived.mode >= 3) return undefined;
      if (derived.keyDegree >= MAX_KEY_DEGREE) return undefined;
      return () => {
        if (derived.motion !== Motion.Still) return;
        setState((state: State) => ({ ...state, motion: Motion.IncrementMode }));
      }
    } else {
      if (derived.mode <= -3) return undefined;
      if (derived.keyDegree <= -MAX_KEY_DEGREE) return undefined;
      return () => {
        if (derived.motion !== Motion.Still) return;
        setState((state: State) => ({ ...state, motion: Motion.DecrementMode }));
      };
    }
  }

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
      <Button
        isPlus={false}
        onClick={buildChangeMode(false)}
        isWaiting={isWaiting}
        dataTestid="decrement-mode-note"
      />
      <Button
        isPlus={true}
        onClick={buildChangeMode(true)}
        isWaiting={isWaiting}
        dataTestid="increment-mode-note"
      />
      <Button
        isPlus={false}
        onClick={buildChangeRoot(false)}
        isWaiting={isWaiting}
        dataTestid="decrement-root-note"
      />
      <Button
        isPlus={true}
        onClick={buildChangeRoot(true)}
        isWaiting={isWaiting}
        dataTestid="increment-root-note"
      />
      <svg
        className={buildClassString(cssModule, ["canvas-svg"])}
        viewBox="0 -132 400 264"
        xmlns="http://www.w3.org/2000/svg"
      >
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
