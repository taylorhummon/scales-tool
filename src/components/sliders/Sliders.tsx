import type { Dispatch, SetStateAction } from "react";

import type { State, Derived } from "src/types";
import { Motion } from "src/enumerations";
import { Buttons } from "src/components/sliders/Buttons";
import { NoteOnSlider } from "src/components/sliders/NoteOnSlider";
import { SolfegeOnSlider } from "src/components/sliders/SolfegeOnSlider";
import { buildClassString } from "src/utilities/css";
import { getNote } from "src/utilities/scale";

import cssModule from "src/components/sliders/Sliders.module.css";


interface SlidersProps {
  derived: Derived;
  setState: Dispatch<SetStateAction<State>>;
}

export function Sliders({
  derived,
  setState
}: SlidersProps): JSX.Element {
  return (
    <g
      className={buildClassString(cssModule, ["sliders"])}
    >
      <defs>
        <clipPath id="sliders-clip-rectangle">
          <rect
            x="-50"
            y="-118"
            width="100"
            height="236"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#sliders-clip-rectangle)"
      >
        {derived.scale.map((note) => (
          <SolfegeOnSlider
            key={note.position}
            motion={derived.motion}
            note={note}
          />
        ))}
        {derived.scale.map((note) => (
          <NoteOnSlider
            key={note.position}
            motion={derived.motion}
            note={note}
          />
        ))}
        <ExtraSolfegeOnSlider
          derived={derived}
        />
        <ExtraNoteOnSlider
          derived={derived}
        />
      </g>
      <Buttons
        derived={derived}
        setState={setState}
      />
    </g>
  );
}

interface ExtraSolfegeOnSliderProps {
  derived: Derived;
}

function ExtraSolfegeOnSlider({
  derived
}: ExtraSolfegeOnSliderProps): JSX.Element | null {
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


interface ExtraNoteOnSliderProps {
  derived: Derived;
}

function ExtraNoteOnSlider({
  derived
}: ExtraNoteOnSliderProps): JSX.Element | null {
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
