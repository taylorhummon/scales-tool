import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { SolfegeOnSlider } from "src/components/sliders/SolfegeOnSlider";


/*
As one solfege is departing from one end of the slider, another solfege is arriving at the other end.
*/

interface ArrivingSolfegeProps {
  musicalKey: MusicalKey;
  motion: Motion;
}

export function ArrivingSolfege({
  musicalKey,
  motion
}: ArrivingSolfegeProps): JSX.Element | null {
  if (
    motion === Motion.DecrementMode ||
    motion === Motion.DecrementBoth
  ) {
    return (
      <SolfegeOnSlider
        motion={motion}
        note={musicalKey.noteAt(4)}
      />
    );
  }
  if (
    motion === Motion.IncrementMode ||
    motion === Motion.IncrementBoth
  ) {
    return (
      <SolfegeOnSlider
        motion={motion}
        note={musicalKey.noteAt(-4)}
      />
    );
  }
  return null;
}
