import { test, expect } from "vitest"
import { renderWithMantine } from "../../../test-utilities/renderWithMantine"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ScalesTool } from "@scalesTool/components/ScalesTool"

import { NaturalNote } from "@scalesTool/utilities/naturalNote"
import { SolfegeLetter } from "@scalesTool/utilities/solfege"


async function turnOnSymmetrySpotlight() {
  if ((screen.getByTestId("symmetry-switch") as HTMLInputElement).checked === false) {
    await userEvent.click(screen.getByTestId("symmetry-switch"))
  }
}

async function turnOffAnimation() {
  if ((screen.getByTestId("animation-switch") as HTMLInputElement).checked === true) {
    await userEvent.click(screen.getByTestId("animation-switch"))
  }
}

function getRootSpotlight(
) {
  return screen.getByTestId("clock-root-spotlight")
}

function getSymmetrySpotlight(
) {
  return screen.getByTestId("clock-symmetry-spotlight")
}

function getDot(
  solfegeLetter: SolfegeLetter,
) {
  return screen.getByTestId(`dot-${solfegeLetter}`)
}

function getOrdinaryLabel(
  naturalNote: NaturalNote,
) {
  return screen.getByTestId(`ordinary-label-${naturalNote}`)
}


test("<ScalesTool /> shows C-Major as default correctly", async () => {
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetrySpotlight()

  expect(
    getRootSpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )

  expect(
    getSymmetrySpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  expect(
    getDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).textContent
  ).toBe(
    "C"
  )

  expect(
    getDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).textContent
  ).toBe(
    "D"
  )

  expect(
    getDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).textContent
  ).toBe(
    "E"
  )

  expect(
    getDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).textContent
  ).toBe(
    "F"
  )

  expect(
    getDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).textContent
  ).toBe(
    "G"
  )

  expect(
    getDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).textContent
  ).toBe(
    "A"
  )

  expect(
    getDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).textContent
  ).toBe(
    "B"
  )
})

test("<ScalesTool /> shows G-Major as default correctly", async () => {
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetrySpotlight()
  await turnOffAnimation()
  await userEvent.click(screen.getByTestId("increment-both"))

  expect(
    getRootSpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )

  expect(
    getSymmetrySpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )

  expect(
    getDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).textContent
  ).toBe(
    "G"
  )

  expect(
    getDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).textContent
  ).toBe(
    "A"
  )

  expect(
    getDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).textContent
  ).toBe(
    "B"
  )

  expect(
    getDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).textContent
  ).toBe(
    "C"
  )

  expect(
    getDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).textContent
  ).toBe(
    "D"
  )

  expect(
    getDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).textContent
  ).toBe(
    "E"
  )

  expect(
    getDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-4")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-4")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).textContent
  ).toBe(
    "F♯"
  )
})

test("<ScalesTool /> shows C-Minor correctly", async () => {
  userEvent.setup()
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetrySpotlight()
  await turnOffAnimation()
  await userEvent.click(screen.getByTestId("decrement-degree"))
  await userEvent.click(screen.getByTestId("decrement-degree"))
  await userEvent.click(screen.getByTestId("decrement-degree"))

  expect(
    getRootSpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )

  expect(
    getSymmetrySpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )

  expect(
    getDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).textContent
  ).toBe(
    "C"
  )

  expect(
    getDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).textContent
  ).toBe(
    "D"
  )

  expect(
    getDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-1")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-1")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).textContent
  ).toBe(
    "E♭"
  )

  expect(
    getDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).textContent
  ).toBe(
    "F"
  )

  expect(
    getDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).textContent
  ).toBe(
    "G"
  )

  expect(
    getDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-6")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-6")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).textContent
  ).toBe(
    "A♭"
  )

  expect(
    getDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-8")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-8")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).textContent
  ).toBe(
    "B♭"
  )
})

test("<ScalesTool /> shows Dorian D correctly", async () => {
  userEvent.setup()
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetrySpotlight()
  await turnOffAnimation()
  await userEvent.click(screen.getByTestId("increment-root"))
  await userEvent.click(screen.getByTestId("increment-root"))

  expect(
    getRootSpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  expect(
    getSymmetrySpotlight().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  expect(
    getDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getOrdinaryLabel(NaturalNote.D).textContent
  ).toBe(
    "D"
  )

  expect(
    getDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getOrdinaryLabel(NaturalNote.E).textContent
  ).toBe(
    "E"
  )

  expect(
    getDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getOrdinaryLabel(NaturalNote.F).textContent
  ).toBe(
    "F"
  )

  expect(
    getDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getOrdinaryLabel(NaturalNote.G).textContent
  ).toBe(
    "G"
  )

  expect(
    getDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getOrdinaryLabel(NaturalNote.A).textContent
  ).toBe(
    "A"
  )

  expect(
    getDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getOrdinaryLabel(NaturalNote.B).textContent
  ).toBe(
    "B"
  )

  expect(
    getDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getOrdinaryLabel(NaturalNote.C).textContent
  ).toBe(
    "C"
  )
})
