import { Motion } from "src/enumerations";
import { Solfege } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/SolfegeOnSlider.module.css";


interface SolfegeOnSliderProps {
  note: Note;
  motion: Motion;
}

export function SolfegeOnSlider({
  note,
  motion
}: SolfegeOnSliderProps): JSX.Element {
  return (
    <g
      className={className(note, motion)}
    >
      <text
        className={buildClassString(cssModule, ["solfege-text"])}
      >
        {note.solfege}:
      </text>
    </g>
  );
}


function className(
  note: Note,
  motion: Motion
): string {
  const classNames = ["solfege-on-slider", note.solfege];
  if (
    motion === Motion.DecrementDoPosition ||
    motion === Motion.DecrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${note.position}-to-${note.position - 1}`);
  } else if (
    motion === Motion.IncrementDoPosition ||
    motion === Motion.IncrementBoth
  ) {
    classNames.push("move");
    classNames.push(`from-${note.position}-to-${note.position + 1}`);
  } else {
    classNames.push(`position-${note.position}`);
  }
  if (note.solfege === Solfege.Do) {
    classNames.push("root");
  }
  return buildClassString(cssModule, classNames);
}
