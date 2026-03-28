import { Motion } from "src/enumerations";
import { MusicalKey } from "src/classes/MusicalKey";
import { NoteOnSlider } from "src/components/sliders/NoteOnSlider";


/*
As one note is departing from one end of the slider, another note is arriving at the other end.
*/

interface ArrivingNoteProps {
  musicalKey: MusicalKey;
  motion: Motion;
}

export function ArrivingNote({
  musicalKey,
  motion
}: ArrivingNoteProps): JSX.Element | null {
  if (
    motion === Motion.DecrementKeyDegree ||
    motion === Motion.DecrementBoth
  ) {
    return (
      <NoteOnSlider
        motion={motion}
        note={musicalKey.noteAt(4)}
      />
    );
  }
  if (
    motion === Motion.IncrementKeyDegree ||
    motion === Motion.IncrementBoth
  ) {
    return (
      <NoteOnSlider
        motion={motion}
        note={musicalKey.noteAt(-4)}
      />
    );
  }
  return null;
}
