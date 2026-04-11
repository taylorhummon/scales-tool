import { useState, useRef, useEffect, useMemo } from "react";

import { MusicalKey } from "@/classes/MusicalKey";
import { Canvas } from "@/components/Canvas";
import { SettingsAccordion } from "@/components/settings/SettingsAccordion";
import { buildClassString } from "@/utilities/css";
import type { State } from "@/utilities/state";
import { getInitialState, handleBrowserHistoryPop, advanceToNextMusicalKey } from "@/utilities/state";

import cssModule from "@/components/ScalesTool.module.scss";


export default function ScalesTool(
): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const animationsCountRef = useRef<number>(0);
  const [state, setState] = useState(getInitialState());
  const musicalKey = useMemo(
    () => {
      return new MusicalKey(state.degree, state.root);
    },
    [state.degree, state.root]
  );
  const { animationType, motion } = state;

  // Handle the browser's "Back" and "Forward" buttons
  useEffect(() => {
    function handlePopstate(event: PopStateEvent) {
      setState((state: State) => handleBrowserHistoryPop(state, event.state));
    }
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  });

  // Count how many animations we've started
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
      if (animationsCountRef.current == 0) {
        advanceToNextMusicalKey(musicalKey, motion, setState);
      }
    }
    const domNode = domNodeRef.current;
    if (domNode) domNode.addEventListener("animationend", animationEndHandler, false);
    return () => {
      if (domNode) domNode.removeEventListener("animationend", animationEndHandler);
    };
  }, [musicalKey, motion, setState]);

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool"])}
      ref={domNodeRef}
    >
      <Canvas
        musicalKey={musicalKey}
        motion={motion}
        animationType={animationType}
        isUsingSolfege={state.isUsingSolfege}
        setState={setState}
      />
      <SettingsAccordion
        animationType={animationType}
        isUsingSolfege={state.isUsingSolfege}
        setState={setState}
      />
    </div>
  );
}
