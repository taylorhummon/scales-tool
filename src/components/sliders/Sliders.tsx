import type { Dispatch, SetStateAction } from "react";

import { Motion } from "src/enumerations";
import type { State } from "src/types";
import { MusicalKey } from "src/classes/MusicalKey";
import { ArrivingNote } from "src/components/sliders/ArrivingNote";
import { ArrivingSolfege } from "src/components/sliders/ArrivingSolfege";
import { Button } from "src/components/sliders/Button";
import { ModeLabel } from "src/components/sliders/ModeLabel";
import { NoteOnSlider } from "src/components/sliders/NoteOnSlider";
import { SolfegeOnSlider } from "src/components/sliders/SolfegeOnSlider";
import { buildClassString } from "src/utilities/css";
import { arrayFromMap } from "src/utilities/map";
import { MODE_NAME_BY_POSITION } from "src/utilities/mode";

import cssModule from "src/components/sliders/Sliders.module.css";


interface SlidersProps {
  musicalKey: MusicalKey;
  motion: Motion;
  setState: Dispatch<SetStateAction<State>>;
}

export function Sliders({
  musicalKey,
  motion,
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
            x="-60"
            y="-118"
            width="120"
            height="236"
          />
        </clipPath>
      </defs>
      <g
        clipPath="url(#sliders-clip-rectangle)"
      >
        {musicalKey.scale.map((note) => (
          <NoteOnSlider
            key={note.position}
            note={note}
            motion={motion}
          />
        ))}
        {musicalKey.scale.map((note) => (
          <SolfegeOnSlider
            key={note.position}
            note={note}
            motion={motion}
          />
        ))}
        <ArrivingSolfege
          musicalKey={musicalKey}
          motion={motion}
        />
        <ArrivingNote
          musicalKey={musicalKey}
          motion={motion}
        />
      </g>
      {arrayFromMap(MODE_NAME_BY_POSITION, (modeName, position) =>
        <ModeLabel
          key={position}
          modeName={modeName}
          position={position}
        />
      )}
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.DecrementDegree}
        setState={setState}
        dataTestid="decrement-degree"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.IncrementDegree}
        setState={setState}
        dataTestid="increment-degree"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.DecrementMode}
        setState={setState}
        dataTestid="decrement-mode"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.IncrementMode}
        setState={setState}
        dataTestid="increment-mode"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.DecrementBoth}
        setState={setState}
        dataTestid="decrement-both"
      />
      <Button
        musicalKey={musicalKey}
        motion={motion}
        onClickMotion={Motion.IncrementBoth}
        setState={setState}
        dataTestid="increment-both"
      />
    </g>
  );
}
