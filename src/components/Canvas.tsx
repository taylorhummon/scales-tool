import type { Derived } from "src/types";

import Clock from "src/components/Clock";
import NoteDot from "src/components/NoteDot";
import NoteLabel from "src/components/NoteLabel";
import RootDot from "src/components/RootDot";


interface CanvasProps {
  derived: Derived;
}

export default function Canvas({
  derived
}: CanvasProps): JSX.Element {
  return (
    <svg
      viewBox="-150 -150 300 300"
      xmlns="http://www.w3.org/2000/svg"
      height="300px"
      width="300px"
    >
      <Clock />
      {derived.notes.map((note) => (
        <NoteDot
          key={note.name + note.hour.toString()}
          motion={derived.motion}
          noteHour={note.hour}
          isRoot={note.hour === derived.rootNoteHour}
        />
      ))}
      {derived.notes.map((note) => (
        <NoteLabel
          key={note.name + note.hour.toString()}
          noteName={note.name}
          noteHour={note.hour}
          solfege={note.solfege}
        />
      ))}
      <RootDot
        motion={derived.motion}
        rootNoteHour={derived.rootNoteHour}
      />
    </svg>
  )
};
