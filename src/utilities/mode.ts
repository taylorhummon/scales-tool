import { ModeName } from "src/enumerations";


export const MODE_NAME_BY_POSITION: Map<number, ModeName> = new Map([
  [3, ModeName.Lydian],
  [2, ModeName.Major],
  [1, ModeName.Mixolydian],
  [0, ModeName.Dorian],
  [-1, ModeName.Minor],
  [-2, ModeName.Phrygian],
  [-3, ModeName.Locrian]
]);
