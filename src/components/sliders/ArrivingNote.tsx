import type { Derived } from "src/types";
import { Motion } from "src/enumerations";
import { NoteOnSlider } from "src/components/sliders/NoteOnSlider";
import { getNote } from "src/utilities/scale";


/*
As one note is departing from one end of the slider, another note is arriving at the other end.
*/

interface ArrivingNoteProps {
  derived: Derived;
}

export function ArrivingNote({
  derived
}: ArrivingNoteProps): JSX.Element | null {
  if (
    derived.motion === Motion.DecrementKeyDegree ||
    derived.motion === Motion.DecrementBoth
  ) {
    const position = 4;
    return (
      <NoteOnSlider
        motion={derived.motion}
        note={getNote(derived.doPosition, derived.keyDegree, position)}
      />
    );
  }
  if (
    derived.motion === Motion.IncrementKeyDegree ||
    derived.motion === Motion.IncrementBoth
  ) {
    const position = -4;
    return (
      <NoteOnSlider
        motion={derived.motion}
        note={getNote(derived.doPosition, derived.keyDegree, position)}
      />
    );
  }
  return null;
}
