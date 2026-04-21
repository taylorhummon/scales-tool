import { test, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import { MusicalKey } from "@/classes/MusicalKey";
import ScalesTool from "@/components/ScalesTool";
import { addToBrowserHistory } from "@/utilities/routing";
import { SolfegeLetter } from "@/utilities/solfege";
import { cleanHistory } from "../testHelpers";


afterEach(cleanHistory);

function getRootDot() {
  return screen.getByTestId("clock-root-dot");
}

function getNoteDot(solfegeLetter: SolfegeLetter) {
  return screen.getByTestId(`note-dot-${solfegeLetter}`);
}

function getNoteLabel(solfegeLetter: SolfegeLetter) {
  return screen.getByTestId(`note-label-${solfegeLetter}`);
}

test("<ScalesTool /> renders without crashing", () => {
  render(<ScalesTool />);
});

test("<ScalesTool /> shows C-Major as default correctly", () => {
  render(<ScalesTool />);

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "C"
  );

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "D"
  );

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "E"
  );

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "F"
  );

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "G"
  );

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "A"
  );

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "B"
  );
});

test("<ScalesTool /> shows Dorian D correctly", () => {
  addToBrowserHistory(new MusicalKey(0, 0));

  render(<ScalesTool />);

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "D"
  );

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "E"
  );

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "F"
  );

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "G"
  );

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "A"
  );

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "B"
  );

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "C"
  );
});

test("<ScalesTool /> shows D-Major correctly", () => {
  addToBrowserHistory(new MusicalKey(0, 2));

  render(<ScalesTool />);

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "D"
  );

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "E"
  );

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-4")
  );
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "F♯"
  );

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "G"
  );

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "A"
  );

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "B"
  );

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-11")
  );
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "C♯"
  );
});

test("<ScalesTool /> shows C-Minor correctly", () => {
  addToBrowserHistory(new MusicalKey(-2, -3));

  render(<ScalesTool />);

  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );

  expect(
    getNoteDot(SolfegeLetter.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );
  expect(
    getNoteLabel(SolfegeLetter.Do).textContent
  ).toBe(
    "C"
  );

  expect(
    getNoteDot(SolfegeLetter.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
  expect(
    getNoteLabel(SolfegeLetter.Re).textContent
  ).toBe(
    "D"
  );

  expect(
    getNoteDot(SolfegeLetter.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-1")
  );
  expect(
    getNoteLabel(SolfegeLetter.Mi).textContent
  ).toBe(
    "E♭"
  );

  expect(
    getNoteDot(SolfegeLetter.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );
  expect(
    getNoteLabel(SolfegeLetter.Fa).textContent
  ).toBe(
    "F"
  );

  expect(
    getNoteDot(SolfegeLetter.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );
  expect(
    getNoteLabel(SolfegeLetter.Sol).textContent
  ).toBe(
    "G"
  );

  expect(
    getNoteDot(SolfegeLetter.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-6")
  );
  expect(
    getNoteLabel(SolfegeLetter.La).textContent
  ).toBe(
    "A♭"
  );

  expect(
    getNoteDot(SolfegeLetter.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-8")
  );
  expect(
    getNoteLabel(SolfegeLetter.Ti).textContent
  ).toBe(
    "B♭"
  );
});
