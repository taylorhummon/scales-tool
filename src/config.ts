import { AnimationType } from "@/utilities/animation";


// Default Settings
export const DEFAULT_ANIMATION_TYPE: AnimationType = AnimationType.Simple;
export const DEFAULT_IS_USING_SOLFEGE: boolean = false;

// Default to no sharps or flats and a root note of C, a.k.a. C-Major.
export const DEFAULT_DEGREE: number = 0;
export const DEFAULT_ROOT: number = -2;

// Allow up to two sharps or two flats on each note in the scale.
export const MAX_DEGREE: number = 14;
export const MIN_DEGREE: number = -14;
