import { useState, useRef, useEffect } from "react";

import { Canvas } from "@/components/Canvas";
import { getNextMusicalKey } from "@/utilities/action";
import { buildClassString } from "@/utilities/css";
import { musicalKeyFromCurrentURL, addToBrowserHistory } from "@/utilities/routing";
import {
  stateFromMusicalKey,
  stateFromHistoricalState,
  musicalKeyFromState,
} from "@/utilities/state";

import cssModule from "@/components/ScalesTool.module.css";


export default function ScalesTool(
): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const animationsCountRef = useRef<number>(0);
  const initialState = stateFromMusicalKey(musicalKeyFromCurrentURL());
  const [state, setState] = useState(initialState);

  const musicalKey = musicalKeyFromState(state);
  const motion = state.motion;

  // Handle the browser's "Back" and "Forward" buttons
  useEffect(() => {
    function handleBrowserHistoryPop(event: PopStateEvent) {
      setState(stateFromHistoricalState(event.state));
    }
    window.addEventListener("popstate", handleBrowserHistoryPop);
    return () => {
      window.removeEventListener("popstate", handleBrowserHistoryPop);
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
      if (animationsCountRef.current >= 1) return;
      const nextMusicalKey = getNextMusicalKey(musicalKey, motion);
      addToBrowserHistory(nextMusicalKey);
      setState(stateFromMusicalKey(nextMusicalKey));
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
        setState={setState}
      />
    </div>
  );
}
