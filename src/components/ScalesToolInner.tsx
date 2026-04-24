import { useRef, useEffect } from "react";

import { MusicalKey, DEFAULT_MUSICAL_KEY } from "@/classes/MusicalKey";
import { Canvas } from "@/components/Canvas";
import { SettingsAccordion } from "@/components/settings/SettingsAccordion";
import { useDerivedContext } from "@/contexts/derived";
import { ActionType } from "@/utilities/action";
import { useDispatchContext } from "@/contexts/dispatch";
import { addToBrowserHistory } from "@/utilities/routing";
import type { HistoricalState } from "@/utilities/state";

import scalesToolInnerCssModule from "@/components/ScalesToolInner.module.scss";


export function ScalesToolInner(
): JSX.Element {
  const { musicalKey, nextMusicalKey, motion } = useDerivedContext();
  const dispatch = useDispatchContext();
  const domNodeRef = useRef<HTMLDivElement>(null);
  const animationsCountRef = useRef<number>(0);

  // Handle the browser's "Back" and "Forward" buttons
  useEffect(() => {
    function handlePopstate(event: PopStateEvent) {
      dispatch({
        type: ActionType.ChangeKey,
        nextMusicalKey: musicalKeyFromHistoricalState(event.state),
      });
    }
    return registerEventListener(window, "popstate", handlePopstate);
  });

  // Count how many animations are runnning
  useEffect(() => {
    function animationStartHandler(): void {
      animationsCountRef.current += 1;
    }
    return registerEventListener(domNodeRef.current, "animationstart", animationStartHandler);
  });

  // What to do when an animation ends
  useEffect(() => {
    function animationEndHandler(): void {
      animationsCountRef.current -= 1;
      if (animationsCountRef.current >= 1) return;
      addToBrowserHistory(nextMusicalKey);
      dispatch({ type: ActionType.ChangeKey, nextMusicalKey });
    }
    return registerEventListener(domNodeRef.current, "animationend", animationEndHandler);
  }, [musicalKey, motion]);

  return (
    <div
      ref={domNodeRef}
    >
      <h1>
        Explore Musical Scales Visually
      </h1>
      <ul
        className={scalesToolInnerCssModule["instructions"]}
      >
        <li>
          Arrow buttons change keys within a mode.
        </li>
        <li>
          Blue dot buttons move between relative keys.
        </li>
        <li>
          Sharp and flat buttons move between parallel keys.
        </li>
      </ul>
      <Canvas />
      <SettingsAccordion />
    </div>
  );
}

// *** Private functions below this line ***

function registerEventListener(
  element: Window | HTMLElement | null,
  eventType: string,
  listener: (event: any) => void,
): () => void {
  if (element) element.addEventListener(eventType, listener);
  return () => {
    if (element) element.removeEventListener(eventType, listener);
  };
}

function musicalKeyFromHistoricalState(
  historicalState: HistoricalState | undefined,
): MusicalKey {
  const mode = historicalState?.mode;
  const root = historicalState?.root;
  if (typeof mode === "number" && typeof root === "number") {
    return new MusicalKey({ mode, root });
  } else {
    return DEFAULT_MUSICAL_KEY;
  }
}
