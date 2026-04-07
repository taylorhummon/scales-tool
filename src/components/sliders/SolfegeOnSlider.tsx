import { ROOT_DOT_STROKE_COLOR, ROOT_DOT_FILL_COLOR } from "@/config";
import { Solfege } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/SolfegeOnSlider.module.scss";


interface SolfegeOnSliderProps {
  note: Note;
}

export function SolfegeOnSlider({
  note
}: SolfegeOnSliderProps): JSX.Element {
  const isRootNote = note.solfege === Solfege.Do;
  return (
    <g
      className={getClassName(note)}
    >
      <text
        className={buildClassString(cssModule, ["solfege-text"])}
        style={isRootNote ? { stroke: ROOT_DOT_STROKE_COLOR } : {}}
      >
        {note.solfege}
      </text>
      <Triangle
        isRootNote={isRootNote}
      />
    </g>
  );
}

function getClassName(
  note: Note
): string {
  const classNames = ["solfege-on-slider", note.solfege, `position-${note.position}`];
  return buildClassString(cssModule, classNames);
}

interface TriangleProps {
  isRootNote: boolean
}

function Triangle({
  isRootNote
}: TriangleProps): JSX.Element | null {
  if (! isRootNote) return null;
  return (
    <polygon
      className={buildClassString(cssModule, ["root-triangle"])}
      points="34,-6 20,-1 20,-11"
      strokeWidth="1.1"
      stroke={ROOT_DOT_STROKE_COLOR}
      fill={ROOT_DOT_FILL_COLOR}
    />
  );
}
