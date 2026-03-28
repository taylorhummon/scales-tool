import { Motion } from "src/enumerations";


export interface State {
  leftSliderPosition: number;
  rightSliderPosition: number;
  motion: Motion;
}
