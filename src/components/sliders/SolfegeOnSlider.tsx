import { Solfege } from "src/enumerations";
import { Note } from "src/classes/Note";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/sliders/SolfegeOnSlider.module.css";


interface SolfegeOnSliderProps {
  note: Note;
}

export function SolfegeOnSlider({
  note
}: SolfegeOnSliderProps): JSX.Element {
  const isRootNote = note.solfege === Solfege.Do;
  return (
    <g
      className={className(note, isRootNote)}
    >
      <text
        className={buildClassString(cssModule, ["solfege-text"])}
      >
        {note.solfege}
      </text>
      {isRootNote ? <RootTriangles /> : null }
    </g>
  );
}

function className(
  note: Note,
  isRootNote: boolean
): string {
  const classNames = ["solfege-on-slider", note.solfege, `position-${note.position}`];
  if (isRootNote) {
    classNames.push("root");
  }
  return buildClassString(cssModule, classNames);
}

function RootTriangles(
): JSX.Element | null {
  return (
    <>
      <polygon
        className={buildClassString(cssModule, ["root-triangle"])}
        points="-33,-5 -22,0 -22,-10"
        strokeWidth="1.1"
        stroke="rgb(4, 51, 255)"
        fill="rgb(208, 214, 253)"
      />
      <polygon
        className={buildClassString(cssModule, ["root-triangle"])}
        points="33,-5 22,0 22,-10"
        strokeWidth="1.1"
        stroke="rgb(4, 51, 255)"
        fill="rgb(208, 214, 253)"
      />
    </>
  );
}
