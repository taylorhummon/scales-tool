import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Solfege } from "src/enumerations";
import ScalesTool from "src/components/ScalesTool";


function getNoteLabel(solfege: Solfege) {
  return screen.getByTestId(`note-label-${solfege}`);
}

function getNoteDot(solfege: Solfege) {
  return screen.getByTestId(`note-dot-${solfege}`);
}

function getRootDot() {
  return screen.getByTestId("clock-root-dot");
}


test("<ScalesTool /> renders without crashing", () => {
  render(<ScalesTool />);
});

test("<ScalesTool /> shows C-Major correctly", () => {
  render(<ScalesTool />);

  expect(
    getNoteLabel(Solfege.Do).textContent
  ).toBe(
    "C"
  );
  expect(
    getNoteLabel(Solfege.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-C")
  );
  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );

  expect(
    getNoteLabel(Solfege.Re).textContent
  ).toBe(
    "D"
  );
  expect(
    getNoteLabel(Solfege.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-D")
  );
  expect(
    getNoteDot(Solfege.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );

  expect(
    getNoteLabel(Solfege.Mi).textContent
  ).toBe(
    "E"
  );
  expect(
    getNoteLabel(Solfege.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-E")
  );
  expect(
    getNoteDot(Solfege.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );

  expect(
    getNoteLabel(Solfege.Fa).textContent
  ).toBe(
    "F"
  );
  expect(
    getNoteLabel(Solfege.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-F")
  );
  expect(
    getNoteDot(Solfege.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );

  expect(
    getNoteLabel(Solfege.Sol).textContent
  ).toBe(
    "G"
  );
  expect(
    getNoteLabel(Solfege.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-G")
  );
  expect(
    getNoteDot(Solfege.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );

  expect(
    getNoteLabel(Solfege.La).textContent
  ).toBe(
    "A"
  );
  expect(
    getNoteLabel(Solfege.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-A")
  );
  expect(
    getNoteDot(Solfege.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );

  expect(
    getNoteLabel(Solfege.Ti).textContent
  ).toBe(
    "B"
  );
  expect(
    getNoteLabel(Solfege.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-B")
  );
  expect(
    getNoteDot(Solfege.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );
});


test("<ScalesTool /> shows C-Minor correctly", () => {
  render(
    <ScalesTool
      degree={-3}
      mode={-1}
    />
  );

  expect(
    getNoteLabel(Solfege.Do).textContent
  ).toBe(
    "C"
  );
  expect(
    getNoteLabel(Solfege.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-C")
  );
  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-10")
  );

  expect(
    getNoteLabel(Solfege.Re).textContent
  ).toBe(
    "D"
  );
  expect(
    getNoteLabel(Solfege.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-D")
  );
  expect(
    getNoteDot(Solfege.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );

  expect(
    getNoteLabel(Solfege.Mi).textContent
  ).toBe(
    "E♭"
  );
  expect(
    getNoteLabel(Solfege.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-E♭")
  );
  expect(
    getNoteDot(Solfege.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-1")
  );

  expect(
    getNoteLabel(Solfege.Fa).textContent
  ).toBe(
    "F"
  );
  expect(
    getNoteLabel(Solfege.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-F")
  );
  expect(
    getNoteDot(Solfege.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-3")
  );

  expect(
    getNoteLabel(Solfege.Sol).textContent
  ).toBe(
    "G"
  );
  expect(
    getNoteLabel(Solfege.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-G")
  );
  expect(
    getNoteDot(Solfege.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );

  expect(
    getNoteLabel(Solfege.La).textContent
  ).toBe(
    "A♭"
  );
  expect(
    getNoteLabel(Solfege.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-A♭")
  );
  expect(
    getNoteDot(Solfege.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-6")
  );

  expect(
    getNoteLabel(Solfege.Ti).textContent
  ).toBe(
    "B♭"
  );
  expect(
    getNoteLabel(Solfege.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-B♭")
  );
  expect(
    getNoteDot(Solfege.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-8")
  );
});


test("<ScalesTool /> shows Dorian E correctly", () => {
  render(
    <ScalesTool
      degree={2}
      mode={0}
    />
  );

  expect(
    getNoteLabel(Solfege.Do).textContent
  ).toBe(
    "E"
  );
  expect(
    getNoteLabel(Solfege.Do).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-E")
  );
  expect(
    getRootDot().getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-2")
  );

  expect(
    getNoteLabel(Solfege.Re).textContent
  ).toBe(
    "F♯"
  );
  expect(
    getNoteLabel(Solfege.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-F♯")
  );
  expect(
    getNoteDot(Solfege.Re).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-4")
  );

  expect(
    getNoteLabel(Solfege.Mi).textContent
  ).toBe(
    "G"
  );
  expect(
    getNoteLabel(Solfege.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-G")
  );
  expect(
    getNoteDot(Solfege.Mi).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-5")
  );

  expect(
    getNoteLabel(Solfege.Fa).textContent
  ).toBe(
    "A"
  );
  expect(
    getNoteLabel(Solfege.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-A")
  );
  expect(
    getNoteDot(Solfege.Fa).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-7")
  );

  expect(
    getNoteLabel(Solfege.Sol).textContent
  ).toBe(
    "B"
  );
  expect(
    getNoteLabel(Solfege.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-B")
  );
  expect(
    getNoteDot(Solfege.Sol).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-9")
  );

  expect(
    getNoteLabel(Solfege.La).textContent
  ).toBe(
    "C♯"
  );
  expect(
    getNoteLabel(Solfege.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-C♯")
  );
  expect(
    getNoteDot(Solfege.La).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-11")
  );

  expect(
    getNoteLabel(Solfege.Ti).textContent
  ).toBe(
    "D"
  );
  expect(
    getNoteLabel(Solfege.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("note-D")
  );
  expect(
    getNoteDot(Solfege.Ti).getAttribute("class")
  ).toEqual(
    expect.stringContaining("hour-0")
  );
});
