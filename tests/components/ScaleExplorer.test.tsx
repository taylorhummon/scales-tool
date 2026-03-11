import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    expect.stringContaining("only")
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("early")
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
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

test("<ScalesTool /> does not reposition notes after clicking increment root note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`increment-root-note`));
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.getAttribute("class")
  ).toEqual(
    expect.stringContaining("only")
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("early")
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
});

test("<ScalesTool /> shows note labels correctly after clicking increment root note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`increment-root-note`));
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.textContent
  ).toBe(
    "G"
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.textContent
  ).toBe(
    "A"
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.textContent
  ).toBe(
    "B"
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.textContent
  ).toBe(
    "C"
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.textContent
  ).toBe(
    "D"
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.textContent
  ).toBe(
    "E"
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.textContent
  ).toBe(
    "F♯"
  );
});

test("<ScalesTool /> does not reposition notes after clicking decrement root note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`decrement-root-note`));
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.getAttribute("class")
  ).toEqual(
    expect.stringContaining("only")
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("early")
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
});

test("<ScalesTool /> shows note labels correctly after clicking decrement root note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`decrement-root-note`));
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.textContent
  ).toBe(
    "F"
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.textContent
  ).toBe(
    "G"
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.textContent
  ).toBe(
    "A"
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.textContent
  ).toBe(
    "B♭"
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.textContent
  ).toBe(
    "C"
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.textContent
  ).toBe(
    "D"
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.textContent
  ).toBe(
    "E"
  );
});

test("<ScalesTool /> repositions notes after clicking increment mode note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`increment-mode-note`));
  const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.getAttribute("class")
  ).toEqual(
    expect.stringContaining("only")
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("early")
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("early")
  );
});

test("<ScalesTool /> shows note labels correctly after clicking increment mode note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`increment-mode-note`));
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
    "B♭"
  );
});

test("<ScalesTool /> repositions notes after clicking decrement mode note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`decrement-mode-note`));
    const domElementDo = getNoteLabel(SolfegeName.Do);
  expect(
    domElementDo.getAttribute("class")
  ).toEqual(
    expect.stringContaining("only")
  );
  const domElementRe = getNoteLabel(SolfegeName.Re);
  expect(
    domElementRe.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementMi = getNoteLabel(SolfegeName.Mi);
  expect(
    domElementMi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementFa = getNoteLabel(SolfegeName.Fa);
  expect(
    domElementFa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementSol = getNoteLabel(SolfegeName.Sol);
  expect(
    domElementSol.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementLa = getNoteLabel(SolfegeName.La);
  expect(
    domElementLa.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
  const domElementTi = getNoteLabel(SolfegeName.Ti);
  expect(
    domElementTi.getAttribute("class")
  ).toEqual(
    expect.stringContaining("late")
  );
});

test("<ScalesTool /> shows note labels correctly after clicking decrement mode note", async () => {
  const user = userEvent.setup();
  render(<ScalesTool />);
  await user.click(screen.getByTestId(`decrement-mode-note`));
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
    "F♯"
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
