import type { Motion } from "@/enumerations";
import { buildNoteLabelAnimator } from "@/classes/NoteLabelAnimator";
import { buildSolfegeLabelAnimator } from "@/classes/SolfegeLabelAnimator";
import type { MusicalKey } from "@/classes/MusicalKey";
import type { Note } from "@/classes/Note";
import { NoteLabel } from "@/components/clock/NoteLabel";
import { SolfegeLabel } from "@/components/clock/SolfegeLabel";


interface LabelsProps {
  musicalKey: MusicalKey;
  motion: Motion;
  isUsingSolfege: boolean;
}

export function Labels({
  musicalKey,
  motion,
  isUsingSolfege
}: LabelsProps): JSX.Element {
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
