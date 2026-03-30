import { useState, useEffect } from "react";

import { Canvas } from "src/components/Canvas";
import { buildClassString } from "src/utilities/css";
import { musicalKeyFromCurrentURL } from "src/utilities/routing";
import {
  stateFromMusicalKey,
  stateFromHistoricalState,
  musicalKeyFromState,
} from "src/utilities/state";

import cssModule from "src/components/ScalesTool.module.css";


export default function ScalesTool(
): JSX.Element {
  const initialState = stateFromMusicalKey(musicalKeyFromCurrentURL());
  const [state, setState] = useState(initialState);

  useEffect(() => {
    function handleBrowserHistoryPop(event: PopStateEvent) {
      setState(stateFromHistoricalState(event.state));
    }
    window.addEventListener("popstate", handleBrowserHistoryPop);
    return () => {
      window.removeEventListener("popstate", handleBrowserHistoryPop);
    };
  });

  return (
    <div
      className={buildClassString(cssModule, ["scales-tool"])}
    >
      <Canvas
        musicalKey={musicalKeyFromState(state)}
        motion={state.motion}
        setState={setState}
      />
    </div>
  );
}
