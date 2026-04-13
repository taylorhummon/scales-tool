import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { getDefaultMusicalKey } from "@/classes/MusicalKey";
import { MAX_MODE, MIN_MODE } from "@/utilities/mode";
import { historicalStateFromMusicalKey } from "@/utilities/state";


export function addToBrowserHistory(
  musicalKey: MusicalKey
): void {
  const path = `/?degree=${musicalKey.degree}&mode=${musicalKey.mode}`;
  const historicalState = historicalStateFromMusicalKey(musicalKey);
  window.history.pushState(historicalState, "", path);
}

export function musicalKeyFromCurrentURL(
): MusicalKey {
  // We have such simple routing in this app that we'll just parse the path by hand.
  const path = document.location.pathname;
  const search = document.location.search;
  if (isPathOK(path) && isSearchEmpty(search)) {
    return getDefaultMusicalKey();
  }
  const musicalKey = musicalKeyFromPath(path, search);
  if (musicalKey === null) {
    console.log(`Did not understand URL: ${path}${search}`);
    window.history.replaceState(null, "", "/");
    return getDefaultMusicalKey();
  }
  return musicalKey;
}

function isPathOK(
  path: string
): boolean {
  return path === "/" || path === "";
}

function isSearchEmpty(
  search: string
): boolean {
  return search === "" || search === "?";
}

function musicalKeyFromPath(
  path: string,
  search: string
): MusicalKey | null {
  if (! isPathOK(path)) return null;
  const searchParams = new URLSearchParams(search);
  const degree = degreeFromSearchParams(searchParams);
  if (degree === null) return null;
  const mode = modeFromSearchParams(searchParams);
  if (mode === null) return null;
  const root = mode + degree;
  return new MusicalKey(degree, root);
}

function degreeFromSearchParams(
  searchParams: URLSearchParams
): number | null {
  const degreeParam = searchParams.get("degree");
  if (degreeParam === null) return null;
  const degree = parseInt(degreeParam, 10);
  if (isNaN(degree)) return null;
  if (degree > MAX_DEGREE || degree < MIN_DEGREE) return null;
  return degree;
}

function modeFromSearchParams(
  searchParams: URLSearchParams
): number | null {
  const modeParam = searchParams.get("mode");
  if (modeParam === null) return null;
  const mode = parseInt(modeParam, 10);
  if (isNaN(mode)) return null;
  if (mode > MAX_MODE || mode < MIN_MODE) return null;
  return mode;
}
