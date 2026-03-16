import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Solfege } from "src/enumerations";
import ScalesTool from "src/components/ScalesTool";


function getNoteLabel(name: Solfege) {
  return screen.getByTestId(`note-label-${name}`);
}


test("<ScalesTool /> renders without crashing", () => {
  render(<ScalesTool />);
});

test("<ScalesTool /> shows notes at the correct positions for C-Major", () => {
  render(<ScalesTool />);
  const domElementDo = getNoteLabel(Solfege.Do);
  expect(
    domElementDo.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );
  const domElementRe = getNoteLabel(Solfege.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
  const domElementMi = getNoteLabel(Solfege.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );
  const domElementFa = getNoteLabel(Solfege.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );
  const domElementSol = getNoteLabel(Solfege.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );
  const domElementLa = getNoteLabel(Solfege.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );
  const domElementTi = getNoteLabel(Solfege.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );
});

test("<ScalesTool /> shows note labels correctly for C-Major", () => {
  render(<ScalesTool />);
  const domElementDo = getNoteLabel(Solfege.Do);
  expect(
    domElementDo.textContent
  ).toBe(
    "C"
  );
  const domElementRe = getNoteLabel(Solfege.Re);
  expect(
    domElementRe.textContent
  ).toBe(
    "D"
  );
  const domElementMi = getNoteLabel(Solfege.Mi);
  expect(
    domElementMi.textContent
  ).toBe(
    "E"
  );
  const domElementFa = getNoteLabel(Solfege.Fa);
  expect(
    domElementFa.textContent
  ).toBe(
    "F"
  );
  const domElementSol = getNoteLabel(Solfege.Sol);
  expect(
    domElementSol.textContent
  ).toBe(
    "G"
  );
  const domElementLa = getNoteLabel(Solfege.La);
  expect(
    domElementLa.textContent
  ).toBe(
    "A"
  );
  const domElementTi = getNoteLabel(Solfege.Ti);
  expect(
    domElementTi.textContent
  ).toBe(
    "B"
  );
});
