import { useRef, useEffect } from "react";

import { MusicalKey, DEFAULT_MUSICAL_KEY } from "@/classes/MusicalKey";
import { Canvas } from "@/components/Canvas";
import { Settings } from "@/components/settings/Settings";
import { useDerivedContext } from "@/contexts/derived";
import { ActionType } from "@/utilities/action";
import { useDispatchContext } from "@/contexts/dispatch";
import { addToBrowserHistory } from "@/utilities/routing";
import type { HistoricalState } from "@/utilities/state";


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
      <Canvas />
      <Settings />
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
  const root = historicalState?.root;
  const degree = historicalState?.degree;
  if (typeof root === "number" && typeof degree === "number") {
    return new MusicalKey({ root, degree });
  } else {
    return DEFAULT_MUSICAL_KEY;
  }
}
