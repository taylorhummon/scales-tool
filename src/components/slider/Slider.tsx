import type { Derived } from "src/types";
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
    <svg
      className={buildClassString(cssModule, ["slider"])}
      viewBox="-220 0 480 60"
      xmlns="http://www.w3.org/2000/svg"
      height="60px"
      width="500px"
    >
      {derived.notes.map((note) => (
        <LocatedSolfege
          key={note.location}
          solfege={note.solfege}
          location={note.location}
        />
      ))}
      {derived.notes.map((note) => (
        <LocatedNote
          key={note.location}
          note={note}
          location={note.location}
        />
      ))}
    </svg>
  );
}
