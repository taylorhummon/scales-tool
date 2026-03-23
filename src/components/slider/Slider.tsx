import type { Derived } from "src/types";
import { Motion } from "src/enumerations";
import { Note } from "src/classes/Note";
import { LocatedNote } from "src/components/slider/LocatedNote";
import { LocatedSolfege } from "src/components/slider/LocatedSolfege";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/slider/Slider.module.css";


interface SliderProps {
  derived: Derived;
}

export function Slider({
  derived
}: SliderProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["slider"])}
    >
      {derived.notes.map((note) => (
        <LocatedSolfege
          key={note.location}
          motion={derived.motion}
          solfege={note.solfege}
          location={note.location}
        />
      ))}
      <ExtraLocatedSolfege
        derived={derived}
      />
      {derived.notes.map((note) => (
        <LocatedNote
          key={note.location}
          motion={derived.motion}
          note={note}
        />
      ))}
      <ExtraLocatedNote
        derived={derived}
      />
    </g>
  );
}

interface ExtraLocatedSolfegeProps {
  derived: Derived;
}

// The ExtraLocatedSolfege is a LocatedSolfege that shows up during the
// IncrementMode or DecrementMode animations.
function ExtraLocatedSolfege({
  derived
}: ExtraLocatedSolfegeProps): JSX.Element | null {
  if (derived.motion === Motion.IncrementMode) {
    return (
      <LocatedSolfege
        motion={derived.motion}
        solfege={derived.notes[0].solfege}
        location={7}
      />
    );
  }
  if (derived.motion === Motion.DecrementMode) {
    return (
      <LocatedSolfege
        motion={derived.motion}
        solfege={derived.notes[6].solfege}
        location={-1}
      />
    );
  }
  return null;
}


interface ExtraLocatedNoteProps {
  derived: Derived;
}

// The ExtraLocatedNote is a LocatedNote that shows up during animations.
function ExtraLocatedNote({
  derived
}: ExtraLocatedNoteProps): JSX.Element | null {
  if (derived.motion === Motion.IncrementRoot || derived.motion === Motion.IncrementMode) {
    const oldNote = derived.notes[0];
    const newNote = new Note(oldNote.naturalNoteName, oldNote.sharpsCount + 1, oldNote.solfege, 7);
    return (
      <LocatedNote
        motion={derived.motion}
        note={newNote}
      />
    );
  }
  if (derived.motion === Motion.DecrementRoot || derived.motion === Motion.DecrementMode) {
    const oldNote = derived.notes[6];
    const newNote = new Note(oldNote.naturalNoteName, oldNote.sharpsCount - 1, oldNote.solfege, -1);
    return (
      <LocatedNote
        motion={derived.motion}
        note={newNote}
      />
    );
  }
  return null;
}
