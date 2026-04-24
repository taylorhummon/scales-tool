import {
  Context,
  createContext,
  useReducer,
  useContext,
  useMemo,
} from 'react';

import { DEFAULT_ANIMATION_TYPE, DEFAULT_IS_USING_SOLFEGE } from "@/config";
import { MusicalKey, DEFAULT_MUSICAL_KEY } from "@/classes/MusicalKey";
import { DispatchContext } from "@/contexts/dispatch";
import { ActionType, Action } from "@/utilities/action";
import { AnimationType } from "@/utilities/animation";
import { Motion, getNextMusicalKey } from "@/utilities/motion";
import type { State } from "@/utilities/state";
import { getInitialState } from "@/utilities/state";


// We derive some information from the state and then make it easily available to all
// subcomponents by putting it into a context.

export interface Derived {
  musicalKey: MusicalKey;
  nextMusicalKey: MusicalKey;
  motion: Motion;
  animationType: AnimationType;
  isUsingSolfege: boolean;
}

// The DEFAULT_DERIVED will only be used outside of the DerivedContext provider.
// We don't expect this to ever happen.
const DEFAULT_DERIVED: Derived = {
  musicalKey: DEFAULT_MUSICAL_KEY,
  nextMusicalKey: DEFAULT_MUSICAL_KEY,
  motion: Motion.Still,
  animationType: DEFAULT_ANIMATION_TYPE,
  isUsingSolfege: DEFAULT_IS_USING_SOLFEGE,
};

export const DerivedContext: Context<Derived> = createContext(DEFAULT_DERIVED);

export function useDerivedContext(
) {
  return useContext(DerivedContext);
}

interface DerivedProviderProps {
  children: JSX.Element | null,
}

export function DerivedProvider({
  children,
}: DerivedProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  const { mode, root, motion, animationType, isUsingSolfege } = state;
  const musicalKey = useMemo(
    () => {
      return new MusicalKey({ mode, root });
    },
    [mode, root],
  );
  const nextMusicalKey = useMemo(
    () => {
      return getNextMusicalKey(musicalKey, motion);
    },
    [musicalKey, motion],
  );
  const derived = { musicalKey, nextMusicalKey, motion, animationType, isUsingSolfege };

  return (
    <DerivedContext.Provider value={derived}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DerivedContext.Provider>
  );
}

function reducer(
  state: State,
  action: Action,
): State {
  if (action.type === ActionType.ActivateMotion) {
    return { ...state, motion: action.motion };
  }
  if (action.type === ActionType.ChangeKey) {
    return {
      ...state,
      mode: action.nextMusicalKey.mode,
      root: action.nextMusicalKey.root,
      motion: Motion.Still
    }
  }
  if (action.type === ActionType.SelectAnimationType) {
    return { ...state, animationType: action.animationType };
  }
  if (action.type === ActionType.SelectIsUsingSolfege) {
    return { ...state, isUsingSolfege: action.isUsingSolfege };
  }
  return state;
}
