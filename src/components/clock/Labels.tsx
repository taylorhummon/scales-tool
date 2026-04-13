import { buildNoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { buildSolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import type { Note } from "@/classes/Note";
import { NoteLabel } from "@/components/clock/NoteLabel";
import { SolfegeLabel } from "@/components/clock/SolfegeLabel";
import { useDerivedContext } from "@/contexts/derived";


export function Labels(
): JSX.Element {
  const { musicalKey, motion, isUsingSolfege } = useDerivedContext();
  if (isUsingSolfege) {
    const solfegeLabelAnimator = buildSolfegeLabelAnimator(musicalKey, motion);
    return (
      <>
        {musicalKey.scale.map((note: Note) => (
          <SolfegeLabel
            key={note.hour}
            solfegeLabelAnimator={solfegeLabelAnimator}
            note={note}
          />
        ))}
      </>
    );
  } else {
    const noteLabelAnimator = buildNoteLabelAnimator(musicalKey, motion);
    return (
      <>
        {musicalKey.scale.map((note: Note) => (
          <NoteLabel
            key={note.hour}
            noteLabelAnimator={noteLabelAnimator}
            note={note}
          />
        ))}
      </>
    );
  }
}
