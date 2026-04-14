import { MAX_DEGREE, MIN_DEGREE } from "@/config";
import { MusicalKey } from "@/classes/MusicalKey";
import { DEFAULT_MUSICAL_KEY } from "@/classes/MusicalKey";
import { MAX_MODE, MIN_MODE } from "@/utilities/mode";
import { historicalStateFromMusicalKey } from "@/utilities/state";


export function addToBrowserHistory(
  musicalKey: MusicalKey
): void {
  const path = `/?degree=${musicalKey.degree}&root=${musicalKey.root}`;
  const historicalState = historicalStateFromMusicalKey(musicalKey);
  window.history.pushState(historicalState, "", path);
}

export function musicalKeyFromCurrentURL(
): MusicalKey {
  // We have such simple routing in this app that we'll just parse the path by hand.
  const path = document.location.pathname;
  const search = document.location.search;
  if (isPathOK(path) && isSearchEmpty(search)) {
    return DEFAULT_MUSICAL_KEY;
  }
  const musicalKey = musicalKeyFromPath(path, search);
  if (musicalKey === null) {
    console.log(`Did not understand URL: ${path}${search}`);
    window.history.replaceState(null, "", "/");
    return DEFAULT_MUSICAL_KEY;
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
  const root = rootFromSearchParams(searchParams, degree);
  if (root === null) return null;
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

function rootFromSearchParams(
  searchParams: URLSearchParams,
  degree: number
): number | null {
  const rootParam = searchParams.get("root");
  if (rootParam === null) return null;
  const root = parseInt(rootParam, 10);
  if (isNaN(root)) return null;
  const mode = root - degree;
  if (mode > MAX_MODE || mode < MIN_MODE) return null;
  return root;
}
