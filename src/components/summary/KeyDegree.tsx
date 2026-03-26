import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/summary/KeyDegree.module.css";


interface KeyDegreeProps {
  keyDegree: number;
}

export function KeyDegree({
  keyDegree
}: KeyDegreeProps): JSX.Element {
  return (
    <>
      <div
        className={buildClassString(cssModule, ["key-degree-label"])}
      >
        key degree:
      </div>
      <div
        className={buildClassString(cssModule, ["key-degree-content"])}
      >
        <span
          className={buildClassString(cssModule, ["key-degree-font"])}
        >
          {keyDegree}
        </span>&nbsp;
        ({getExplanation(keyDegree)})
      </div>
    </>
  );
}

function getExplanation(
  keyDegree: number,
): string {
  if (keyDegree === 0)  return "No sharps or flats";
  if (keyDegree === 1)  return "One sharp";
  if (keyDegree === -1) return "One flat";
  if (keyDegree >= 2)   return `${writtenOutNumber(keyDegree)} sharps`;
  if (keyDegree <= -2)  return `${writtenOutNumber(- keyDegree)} flats`;
  return "";
}

function writtenOutNumber(
  n: number
): string {
  if (n === 0) return "Zero";
  if (n === 1) return "One";
  if (n === 2) return "Two";
  if (n === 3) return "Three";
  if (n === 4) return "Four";
  if (n === 5) return "Five";
  if (n === 6) return "Six";
  if (n === 7) return "Seven";
  if (n === 8) return "Eight";
  if (n === 9) return "Nine";
  if (n === 10) return "Ten";
  if (n === 11) return "Eleven";
  if (n === 12) return "Twelve";
  if (n === 13) return "Thirteen";
  if (n === 14) return "Fourteen";
  throw Error(`Number ${n} out of range`);
}
