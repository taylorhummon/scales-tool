import { Motion } from "src/enumerations";
import { Solfege } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/slider/LocatedSolfege.module.css";


interface LocatedSolfegeProps {
  motion: Motion;
  solfege: Solfege;
  location: number;
}

export function LocatedSolfege({
  motion,
  solfege,
  location
}: LocatedSolfegeProps): JSX.Element {
  return (
    <g
      className={className(motion, solfege, location)}
    >
      <text>
        {solfege}:
      </text>
    </g>
  );
}


function className(
  motion: Motion,
  solfege: Solfege,
  location: number
): string {
  const classNames = ["located-solfege", solfege];
  if (motion === Motion.IncrementMode) {
    classNames.push("move");
    classNames.push(`from-${location}-to-${location + 1}`);
  } else if (motion === Motion.DecrementMode) {
    classNames.push("move");
    classNames.push(`from-${location}-to-${location - 1}`);
  } else {
    classNames.push(`location-${location}`);
  }
  if (solfege === Solfege.Do) {
    classNames.push("root");
  }
  return buildClassString(cssModule, classNames);
}
