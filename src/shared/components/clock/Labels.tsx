import { OrdinaryLabel } from "@shared/components/clock/OrdinaryLabel"
import { SimplifiedLabel } from "@shared/components/clock/SimplifiedLabel"
import { SolfegeLabel } from "@shared/components/clock/SolfegeLabel"
import { LabelsOption } from "@shared/utilities/clock"
import { type Derived } from "@shared/utilities/derived"
import { NATURAL_NOTES } from "@shared/utilities/naturalNote"
import { SIMPLIFIED_LETTERS } from "@shared/utilities/simplifiedLetter"
import { SOLFEGE_LETTERS } from "@shared/utilities/solfegeLetter"


interface LabelsParameters {
  derived: Derived,
  isInside: boolean,
}

export function Labels({
  derived,
  isInside,
}: LabelsParameters): React.ReactNode {
  const { clockSettings } = derived
  const labelsOption = isInside ? clockSettings.insideLabelsOption : clockSettings.outsideLabelsOption
  if (labelsOption === LabelsOption.Ordinary) return (
    <OrdinaryLabels
      derived={derived}
      isInside={isInside}
    />
  )
  if (labelsOption === LabelsOption.Solfege) return (
    <SolfegeLabels
      derived={derived}
      isInside={isInside}
    />
  )
  if (labelsOption === LabelsOption.Simplified) return (
    <SimplifiedLabels
      derived={derived}
      isInside={isInside}
    />
  )
  return null
}

function OrdinaryLabels({
  derived,
  isInside,
}: LabelsParameters): React.ReactNode {
  return (
    <>
      {NATURAL_NOTES.map((naturalNote) =>
        <OrdinaryLabel
          key={naturalNote}
          derived={derived}
          isInside={isInside}
          naturalNote={naturalNote}
        />
      )}
    </>
  )
}

function SolfegeLabels({
  derived,
  isInside,
}: LabelsParameters): React.ReactNode {
  return (
    <>
      {SOLFEGE_LETTERS.map((solfegeLetter) =>
        <SolfegeLabel
          key={solfegeLetter}
          derived={derived}
          isInside={isInside}
          solfegeLetter={solfegeLetter}
        />
      )}
    </>
  )
}

function SimplifiedLabels({
  derived,
  isInside,
}: LabelsParameters): React.ReactNode {
  return (
    <>
      {SIMPLIFIED_LETTERS.map((simplifiedLetter) =>
        <SimplifiedLabel
          key={simplifiedLetter}
          derived={derived}
          isInside={isInside}
          simplifiedLetter={simplifiedLetter}
        />
      )}
    </>
  )
}
