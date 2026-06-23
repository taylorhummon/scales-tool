import { test, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import { renderWithMantine } from "../../test-utilities/renderWithMantine"
import {
  getTriadSpotlight0,
  getTriadSpotlight2,
  getTriadSpotlight4,
  getRotateTriadCwButton,
} from "../../test-utilities/componentUtilities"

import { TriadsTool } from "@triadsTool/TriadsTool"

import { AnimationOption } from "@shared/utilities/clock"


// Turn off animation
vi.mock(import("@triadsTool/initialState"), async (importOriginal) => {
  const originalModule = await importOriginal()
  const originialInitialState = originalModule.getInitialState()
  return {
    getInitialState: () => ({ ...originialInitialState, animationOption: AnimationOption.None }),
  }
})

test("<TriadsTool /> works", async () => {
  renderWithMantine(<TriadsTool />)

  const user = userEvent.setup()

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )

  await user.click(getRotateTriadCwButton())

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )

  await user.click(getRotateTriadCwButton())

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )

  await user.click(getRotateTriadCwButton())

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )

  await user.click(getRotateTriadCwButton())

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )

  await user.click(getRotateTriadCwButton())

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  )

  await user.click(getRotateTriadCwButton())

  expect(
    getTriadSpotlight0().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  )
  expect(
    getTriadSpotlight2().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  )
  expect(
    getTriadSpotlight4().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  )
})
