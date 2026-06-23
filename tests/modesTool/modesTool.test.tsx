import { test, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import { renderWithMantine } from "../../test-utilities/renderWithMantine"
import { getSolfegeLabel, getIncrementModeButton  } from "../../test-utilities/componentUtilities"

import { ModesTool } from "@modesTool/ModesTool"

import { AnimationOption } from "@shared/utilities/clock"
import { SolfegeLetter } from "@shared/utilities/solfegeLetter"


// Turn off animation
vi.mock(import("@modesTool/initialState"), async (importOriginal) => {
  const originalModule = await importOriginal()
  const originialInitialState = originalModule.getInitialState()
  return {
    getInitialState: () => ({ ...originialInitialState, animationOption: AnimationOption.None }),
  }
})

test("<ModesTool /> shows major as default correctly", async () => {
  renderWithMantine(<ModesTool />)

  expect(
    getSolfegeLabel(SolfegeLetter.do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.do).textContent
  ).toBe(
    "do"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.re).textContent
  ).toBe(
    "re"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-4")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.mi).textContent
  ).toBe(
    "mi"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.fa).textContent
  ).toBe(
    "fa"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.sol).textContent
  ).toBe(
    "sol"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.la).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.la).textContent
  ).toBe(
    "la"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-11")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.ti).textContent
  ).toBe(
    "ti"
  )
})

test("<ModesTool /> shows minor correctly", async () => {
  renderWithMantine(<ModesTool />)

  const user = userEvent.setup()
  await user.click(getIncrementModeButton())
  await user.click(getIncrementModeButton())
  await user.click(getIncrementModeButton())

  expect(
    getSolfegeLabel(SolfegeLetter.do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.do).textContent
  ).toBe(
    "do"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.re).textContent
  ).toBe(
    "re"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.mi).textContent
  ).toBe(
    "mi"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.fa).textContent
  ).toBe(
    "fa"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.sol).textContent
  ).toBe(
    "sol"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.la).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-8")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.la).textContent
  ).toBe(
    "la"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.ti).textContent
  ).toBe(
    "ti"
  )
})

test("<ModesTool /> shows Dorian correctly", async () => {
  renderWithMantine(<ModesTool />)

  const user = userEvent.setup()
  await user.click(getIncrementModeButton())
  await user.click(getIncrementModeButton())

  expect(
    getSolfegeLabel(SolfegeLetter.do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.do).textContent
  ).toBe(
    "do"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.re).textContent
  ).toBe(
    "re"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.mi).textContent
  ).toBe(
    "mi"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.fa).textContent
  ).toBe(
    "fa"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.sol).textContent
  ).toBe(
    "sol"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.la).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.la).textContent
  ).toBe(
    "la"
  )
  expect(
    getSolfegeLabel(SolfegeLetter.ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getSolfegeLabel(SolfegeLetter.ti).textContent
  ).toBe(
    "ti"
  )
})
