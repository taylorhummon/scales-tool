import { useRef, useEffect } from "react";

import { MusicalKey, getDefaultMusicalKey } from "@/classes/MusicalKey";
import { Canvas } from "@/components/Canvas";
import { SettingsAccordion } from "@/components/settings/SettingsAccordion";
import { useDerivedContext } from "@/contexts/derived";
import { ActionType } from "@/utilities/action";
import { useDispatchContext } from "@/contexts/dispatch";
import { buildClassString } from "@/utilities/css";
import { addToBrowserHistory } from "@/utilities/routing";
import type { HistoricalState } from "@/utilities/state";

import cssModule from "@/components/ScalesToolInner.module.scss";


export function ScalesToolInner(
): JSX.Element {
  const { musicalKey, nextMusicalKey, motion } = useDerivedContext();
  const dispatch = useDispatchContext();
  const domNodeRef = useRef<HTMLDivElement>(null);
  const animationsCountRef = useRef<number>(0);

  // Handle the browser's "Back" and "Forward" buttons
  useEffect(() => {
    function handlePopstate(event: PopStateEvent) {
      const nextMusicalKey = musicalKeyFromHistoricalState(event.state);
      dispatch({ type: ActionType.ChangeKey, nextMusicalKey });
    }
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  });

  // Count how many animations are runnning
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

  // What to do when an animation ends
  useEffect(() => {
    function animationEndHandler(): void {
      animationsCountRef.current -= 1;
      if (animationsCountRef.current >= 1) return;
      addToBrowserHistory(nextMusicalKey);
      dispatch({ type: ActionType.ChangeKey, nextMusicalKey });
    }
    const domNode = domNodeRef.current;
    if (domNode) domNode.addEventListener("animationend", animationEndHandler, false);
    return () => {
      if (domNode) domNode.removeEventListener("animationend", animationEndHandler);
    };
  }, [musicalKey, motion]);

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool-inner"])}
      ref={domNodeRef}
    >
      <Canvas />
      <SettingsAccordion />
    </div>
  );
}

// *** Private functions below this line ***

function musicalKeyFromHistoricalState(
  historicalState: HistoricalState | undefined
): MusicalKey {
  if (historicalState === undefined) {
    return getDefaultMusicalKey();
  }
  return new MusicalKey(historicalState.degree, historicalState.root);
}
