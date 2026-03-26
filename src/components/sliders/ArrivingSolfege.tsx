import type { Derived } from "src/types";
import { Motion } from "src/enumerations";
import { SolfegeOnSlider } from "src/components/sliders/SolfegeOnSlider";
import { getNote } from "src/utilities/scale";


/*
As one solfege is departing from one end of the slider, another solfege is arriving at the other end.
*/

interface ArrivingSolfegeProps {
  derived: Derived;
}

export function ArrivingSolfege({
  derived
}: ArrivingSolfegeProps): JSX.Element | null {
  const motion = derived.motion
  if (
    motion === Motion.DecrementDoPosition ||
    motion === Motion.DecrementBoth
  ) {
    const position = 4;
    return (
      <SolfegeOnSlider
        motion={motion}
        note={getNote(derived.doPosition, derived.keyDegree, position)}
      />
    );
  }
  if (
    motion === Motion.IncrementDoPosition ||
    motion === Motion.IncrementBoth
  ) {
    const position = -4;
    return (
      <SolfegeOnSlider
        motion={motion}
        note={getNote(derived.doPosition, derived.keyDegree, position)}
      />
    );
  }
  return null;
}
