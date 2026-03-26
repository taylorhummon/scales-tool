import type { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State, Derived } from "src/types";
import { Button } from "src/components/sliders/Button";
import { ArrivingNote } from "src/components/sliders/ArrivingNote";
import { ArrivingSolfege } from "src/components/sliders/ArrivingSolfege";
import { NoteOnSlider } from "src/components/sliders/NoteOnSlider";
import { SolfegeOnSlider } from "src/components/sliders/SolfegeOnSlider";
import { buildClassString } from "src/utilities/css";

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
        <clipPath
          id="sliders-clip-rectangle"
        >
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
        <ArrivingSolfege
          derived={derived}
        />
        <ArrivingNote
          derived={derived}
        />
      </g>
      <Button
        derived={derived}
        motion={Motion.DecrementDoPosition}
        setState={setState}
        dataTestid="decrement-do-position"
      />
      <Button
        derived={derived}
        motion={Motion.IncrementDoPosition}
        setState={setState}
        dataTestid="increment-do-position"
      />
      <Button
        derived={derived}
        motion={Motion.DecrementKeyDegree}
        setState={setState}
        dataTestid="decrement-key-degree"
      />
      <Button
        derived={derived}
        motion={Motion.IncrementKeyDegree}
        setState={setState}
        dataTestid="increment-key-degree"
      />
      <Button
        derived={derived}
        motion={Motion.DecrementBoth}
        setState={setState}
        dataTestid="decrement-both"
      />
      <Button
        derived={derived}
        motion={Motion.IncrementBoth}
        setState={setState}
        dataTestid="increment-both"
      />
    </g>
  );
}
