import { SHOW_SOLFEGE_ON_SLIDER, ROOT_DOT_STROKE_COLOR, ROOT_DOT_FILL_COLOR } from "@/config";
import { Solfege } from "@/enumerations";
import type { Note } from "@/classes/Note";
import { buildClassString } from "@/utilities/css";

import cssModule from "@/components/sliders/SolfegeOnSlider.module.css";


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
      <LargeTriangle
        isRootNote={isRootNote}
      />
      <SolfegeText
        note={note}
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

interface LargeTriangleProps {
  isRootNote: boolean;
}

function LargeTriangle({
  isRootNote
}: LargeTriangleProps): JSX.Element | null {
  if (SHOW_SOLFEGE_ON_SLIDER) return null;
  if (! isRootNote) return null;
  return (
    <polygon
      points="18,-6 -11,0 -11,-12"
      strokeWidth="1.2"
      stroke={ROOT_DOT_STROKE_COLOR}
      fill={ROOT_DOT_FILL_COLOR}
    />
  );
}

interface SolfegeTextProps {
  note: Note;
  isRootNote: boolean;
}

function SolfegeText({
  note,
  isRootNote
}: SolfegeTextProps): JSX.Element | null {
  if (! SHOW_SOLFEGE_ON_SLIDER) return null;
  return (
    <>
      <text
        className={buildClassString(cssModule, ["solfege-text"])}
        style={isRootNote ? { "stroke": ROOT_DOT_STROKE_COLOR } : {}}
      >
        {note.solfege}
      </text>
      <SmallTriangle
        isRootNote={isRootNote}
      />
    </>
  );
}

interface SmallTriangleProps {
  isRootNote: boolean
}

function SmallTriangle({
  isRootNote
}: SmallTriangleProps): JSX.Element | null {
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
