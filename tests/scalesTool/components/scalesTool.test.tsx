import { test, expect } from "vitest"
import { renderWithMantine } from "../../../test-utilities/renderWithMantine"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ScalesTool } from "@scalesTool/components/ScalesTool"

import { SolfegeLetter } from "@shared/utilities/solfege"


async function turnOnSymmetryDot() {
  if ((screen.getByTestId("symmetry-switch") as HTMLInputElement).checked === false) {
    await userEvent.click(screen.getByTestId("symmetry-switch"))
  }
}

async function turnOffAnimation() {
  if ((screen.getByTestId("animation-switch") as HTMLInputElement).checked === true) {
    await userEvent.click(screen.getByTestId("animation-switch"))
  }
}

function getRootDot(
) {
  return screen.getByTestId("clock-root-dot")
}

function getSymmetryDot(
) {
  return screen.getByTestId("clock-symmetry-dot")
}

function getNoteDot(
  solfegeLetter: SolfegeLetter,
) {
  return screen.getByTestId(`note-dot-${solfegeLetter}`)
}

function getNoteLabel(
  solfegeLetter: SolfegeLetter,
) {
  return screen.getByTestId(`note-label-${solfegeLetter}`)
}


test("<ScalesTool /> shows C-Major as default correctly", async () => {
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetryDot()

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )

  expect(
    getSymmetryDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "C"
  )

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "D"
  )

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "E"
  )

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "F"
  )

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "G"
  )

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "A"
  )

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "B"
  )
})

test("<ScalesTool /> shows G-Major as default correctly", async () => {
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetryDot()
  await turnOffAnimation()
  await userEvent.click(screen.getByTestId("increment-both"))

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )

  expect(
    getSymmetryDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "G"
  )

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "A"
  )

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "B"
  )

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "C"
  )

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "D"
  )

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "E"
  )

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-4")
  )
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "F♯"
  )
})

test("<ScalesTool /> shows C-Minor correctly", async () => {
  userEvent.setup()
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetryDot()
  await turnOffAnimation()
  await userEvent.click(screen.getByTestId("decrement-degree"))
  await userEvent.click(screen.getByTestId("decrement-degree"))
  await userEvent.click(screen.getByTestId("decrement-degree"))

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )

  expect(
    getSymmetryDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "C"
  )

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "D"
  )

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-1")
  )
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "E♭"
  )

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "F"
  )

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "G"
  )

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-6")
  )
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "A♭"
  )

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-8")
  )
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "B♭"
  )
})

test("<ScalesTool /> shows Dorian D correctly", async () => {
  userEvent.setup()
  renderWithMantine(<ScalesTool />)

  await turnOnSymmetryDot()
  await turnOffAnimation()
  await userEvent.click(screen.getByTestId("increment-root"))
  await userEvent.click(screen.getByTestId("increment-root"))

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  expect(
    getSymmetryDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "D"
  )

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "E"
  )

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "F"
  )

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "G"
  )

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "A"
  )

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "B"
  )

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "C"
  )
})
