import {
  Context,
  createContext,
  useReducer,
  useContext,
  useMemo,
} from 'react';

import { MusicalKey } from "@/classes/MusicalKey";
import { DispatchContext } from "@/contexts/dispatch";
import { ActionType, Action } from "@/utilities/action";
import type { AnimationType } from "@/utilities/animation";
import { Motion } from "@/utilities/motion";
import type { State } from "@/utilities/state";
import { getInitialState } from "@/utilities/state";


export interface Derived {
  musicalKey: MusicalKey;
  motion: Motion;
  animationType: AnimationType;
  isUsingSolfege: boolean;
}

export const DerivedContext: Context<Derived> = createContext(getInitialDerived());

export function useDerivedContext() {
  return useContext(DerivedContext);
}

interface DerivedProviderProps {
  children: JSX.Element | null
}

export function DerivedProvider({
  children
}: DerivedProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  const musicalKey = useMemo(
    () => {
      return new MusicalKey(state.degree, state.root);
    },
    [state.degree, state.root]
  );
  const derived = {
    musicalKey,
    motion: state.motion,
    animationType: state.animationType,
    isUsingSolfege: state.isUsingSolfege
  };

  return (
    <DerivedContext.Provider value={derived}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DerivedContext.Provider>
  );
}

// *** Private functions below this line ***

function getInitialDerived(
): Derived {
  const initialState = getInitialState();
  const initialMusicalKey = new MusicalKey(initialState.degree, initialState.root);
  return buildDerived(initialState, initialMusicalKey);
}

function buildDerived(
  state: State,
  musicalKey: MusicalKey
): Derived {
  return {
    musicalKey,
    motion: state.motion,
    animationType: state.animationType,
    isUsingSolfege: state.isUsingSolfege
  }
}

function reducer(
  state: State,
  action: Action
): State {
  if (action.type === ActionType.ActivateMotion) {
    return { ...state, motion: action.motion };
  }
  if (action.type === ActionType.ChangeKey) {
    return {
      ...state,
      degree: action.nextMusicalKey.degree,
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
