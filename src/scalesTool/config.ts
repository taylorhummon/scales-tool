import { AnimationOption, AnchorOption } from "@scalesTool/utilities/clock"


// Default Settings
export const DEFAULT_IS_USING_ANIMATION: boolean = true
export const DEFAULT_IS_UNTANGLED: boolean = false
export const DEFAULT_IS_USING_SYMMETRY_DOT: boolean = false
export const DEFAULT_IS_USING_SOLFEGE: boolean = false
export const DEFAULT_ANIMATION_OPTION: AnimationOption = AnimationOption.Ballet
export const DEFAULT_ANCHOR_OPTION: AnchorOption = AnchorOption.D

// Default to C-Major
export const DEFAULT_ROOT: number = -2
export const DEFAULT_DEGREE: number = 0

// Allow up to two sharps or two flats on each note in the scale
export const MAX_DEGREE: number = 14
export const MIN_DEGREE: number = -14
