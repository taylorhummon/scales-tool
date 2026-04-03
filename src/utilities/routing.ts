import {
  MusicalKey,
  musicalKeyFromShorthand,
  getDefaultMusicalKey,
} from "@/classes/MusicalKey";
import { historicalStateFromMusicalKey } from "@/utilities/state";


export function addToBrowserHistory(
  musicalKey: MusicalKey
): void {
  const path = `/key/${musicalKey.shorthand}`;
  const historicalState = historicalStateFromMusicalKey(musicalKey);
  window.history.pushState(historicalState, "", path);
}

export function musicalKeyFromCurrentURL(
): MusicalKey {
  // We have such simple routing in this app that we'll just parse the path by hand.
  const path = document.location.pathname;
  if (path === "/" || path === "") {
    return getDefaultMusicalKey();
  }
  const musicalKey = musicalKeyFromPath(path);
  if (musicalKey === null) {
    console.log(`Could not parse URL path: ${path}`);
    window.history.replaceState(null, "", "/");
    return getDefaultMusicalKey();
  }
  return musicalKey;
}

function musicalKeyFromPath(
  path: string
): MusicalKey | null {
  const result = /^\/key\/(.*)$/i.exec(path);
  if (result === null) return null;
  return musicalKeyFromShorthand(result[1]);
}
