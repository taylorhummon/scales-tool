import { screen } from "@testing-library/react"

import { type NaturalNote } from "@shared/utilities/naturalNote"
import { type SolfegeLetter } from "@shared/utilities/solfegeLetter"
import { type SimplifiedLetter } from "@shared/utilities/simplifiedLetter"


export function getDot(
  solfegeLetter: SolfegeLetter,
) {
  return screen.getByTestId(`dot-${solfegeLetter}`)
}

export function getOrdinaryLabel(
  naturalNote: NaturalNote,
) {
  return screen.getByTestId(`ordinary-label-${naturalNote}`)
}

export function getSolfegeLabel(
  solfegeLetter: SolfegeLetter,
) {
  return screen.getByTestId(`solfege-label-${solfegeLetter}`)
}

export function getSimplifiedLabel(
  simplifiedLetter: SimplifiedLetter,
) {
  return screen.getByTestId(`simplified-label-${simplifiedLetter}`)
}

export function getRootSpotlight(
) {
  return screen.getByTestId("clock-root-spotlight")
}

export function getRankSpotlight(
) {
  return screen.getByTestId("clock-rank-spotlight")
}

export function getTriadSpotlight0(
) {
  return screen.getByTestId("triad-spotlight-0")
}

export function getTriadSpotlight2(
) {
  return screen.getByTestId("triad-spotlight-2")
}

export function getTriadSpotlight4(
) {
  return screen.getByTestId("triad-spotlight-4")
}

export function getIncrementModeButton(
) {
  return screen.getByTestId("increment-mode")
}

export function getDecrementModeButton(
) {
  return screen.getByTestId("decrement-mode")
}

export function getIncrementRankButton(
) {
  return screen.getByTestId("increment-rank")
}

export function getDecrementRankButton(
) {
  return screen.getByTestId("decrement-rank")
}

export function getIncrementRootButton(
) {
  return screen.getByTestId("increment-root")
}

export function getDecrementRootButton(
) {
  return screen.getByTestId("decrement-root")
}

export function getIncrementBothButton(
) {
  return screen.getByTestId("increment-both")
}

export function getDecrementBothButton(
) {
  return screen.getByTestId("decrement-both")
}

export function getRotateTriadCwButton(
) {
  return screen.getByTestId("rotate-triad-cw")
}

export function getRotateTriadCcwButton(
) {
  return screen.getByTestId("rotate-triad-ccw")
}

export function getExtraNoteNamesSelect(
) {
  return screen.getByTestId("extra-note-names-select")
}
