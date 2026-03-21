import { Solfege } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/slider/LocatedSolfege.module.css";


interface LocatedSolfegeProps {
  solfege: Solfege;
  location: number;
}

export function LocatedSolfege({
  solfege,
  location
}: LocatedSolfegeProps): JSX.Element {
  return (
    <text
      className={className(solfege, location)}
    >
      {solfege}
    </text>
  );
}


function className(
  solfege: Solfege,
  location: number
): string {
  const classNames = ["located-solfege", solfege, `location-${location}`];
  return buildClassString(cssModule, classNames);
}
