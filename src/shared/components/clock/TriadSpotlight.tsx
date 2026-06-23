import { type MusicalKey } from "@shared/classes/MusicalKey"
import {
  type ClockSettings,
  TriadOriginOption,
  getCurrentHour,
  getNextHour,
} from "@shared/utilities/clock"
import {
  TRIAD_ROOT_SPOTLIGHT_STROKE,
  TRIAD_ROOT_SPOTLIGHT_FILL,
  TRIAD_SPOTLIGHT_STROKE,
  TRIAD_SPOTLIGHT_FILL,
} from "@shared/utilities/color"
import { buildClassName } from "@shared/utilities/css"
import { type Derived } from "@shared/utilities/derived"
import { getBalancedMod7 } from "@shared/utilities/math"
import { SolfegeLetter, solfegeLetterFromButterflyIndex } from "@shared/utilities/solfegeLetter"

import triadSpotlightCssModule from "./TriadSpotlight.module.scss"


interface TriadSpotlightParameters {
  derived: Derived,
  solfegeOffset: number,
  dataTestid?: string,
}

export function TriadSpotlight({
  derived,
  solfegeOffset,
  dataTestid,
}: TriadSpotlightParameters): React.ReactNode {
  const startHour = getStartHour(derived, solfegeOffset)
  const finishHour = getFinishHour(derived, solfegeOffset)

  return (
    <circle
      className={getClassName(startHour, finishHour)}
      data-testid={dataTestid}
      cx="0"
      cy="0"
      r="14"
      strokeWidth="1.6"
      stroke={solfegeOffset === 0 ? TRIAD_ROOT_SPOTLIGHT_STROKE : TRIAD_SPOTLIGHT_STROKE}
      fill={solfegeOffset === 0 ? TRIAD_ROOT_SPOTLIGHT_FILL : TRIAD_SPOTLIGHT_FILL}
    />
  )
}

function getClassName(
  startHour: number,
  finishHour: number,
): string {
  const classNames = [ "triad-spotlight" ]
  if (finishHour === startHour) {
    classNames.push(`hour-${startHour}`)
  } else {
    classNames.push(`move-from-${startHour}-to-${finishHour}`)
  }
  return buildClassName(triadSpotlightCssModule, classNames)
}

function getStartHour(
  derived: Derived,
  solfegeOffset: number,
): number {
  const { clockSettings, currentMusicalKey, currentTriadOffset } = derived
  const currentSolfegeLetter = getSolfegeLetter(clockSettings, currentMusicalKey, currentTriadOffset, solfegeOffset)
  const startNote = currentMusicalKey.noteFromSolfegeLetter(currentSolfegeLetter)
  return getCurrentHour(derived, startNote)
}

function getFinishHour(
  derived: Derived,
  solfegeOffset: number,
): number {
  const { clockSettings, nextMusicalKey, nextTriadOffset } = derived
  const nextSolfegeLetter = getSolfegeLetter(clockSettings, nextMusicalKey, nextTriadOffset, solfegeOffset)
  const finishNote = nextMusicalKey.noteFromSolfegeLetter(nextSolfegeLetter)
  return getNextHour(derived, finishNote)
}

function getSolfegeLetter(
  clockSettings: ClockSettings,
  musicalKey: MusicalKey,
  triadOffset: number,
  solfegeOffset: number,
): SolfegeLetter {
  const { triadOriginOption } = clockSettings
  if (triadOriginOption === TriadOriginOption.RootNote) {
    return solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset + solfegeOffset))
  }
  if (triadOriginOption === TriadOriginOption.RankNote) {
    return solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset + solfegeOffset + 3 * musicalKey.mode))
  }
  if (triadOriginOption === TriadOriginOption.None) {
    throw Error("Should not be looking for solfege letter when triadOriginOption is None")
  }
  throw Error(`Unrecognized TriadOriginOption ${triadOriginOption}`)
}
