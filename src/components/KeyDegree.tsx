import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/KeyDegree.module.css";


interface KeyDegreeProps {
  keyDegree: number;
}

export default function KeyDegree({
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
        className={buildClassString(cssModule, ["key-degree-content", "key-degree-text"])}
      >
        {keyDegree}
      </div>
    </>
  );
}
