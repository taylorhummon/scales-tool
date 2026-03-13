import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SolfegeName } from "src/enumerations";
import ScalesTool from "src/components/ScalesTool";


function getNoteLabel(name: SolfegeName) {
  return screen.getByTestId(`note-label-${name}`);
}


test("<ScalesTool /> renders without crashing", () => {
  render(<ScalesTool />);
});

test("<ScalesTool /> shows notes at the correct positions for C-Major", () => {
  render(<ScalesTool />);
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );
});

test("<ScalesTool /> shows note labels correctly for C-Major", () => {
  render(<ScalesTool />);
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.textContent
  ).toBe(
    "C"
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.textContent
  ).toBe(
    "D"
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.textContent
  ).toBe(
    "E"
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.textContent
  ).toBe(
    "F"
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.textContent
  ).toBe(
    "G"
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.textContent
  ).toBe(
    "A"
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.textContent
  ).toBe(
    "B"
  );
});
