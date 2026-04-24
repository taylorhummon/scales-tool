import {
  Context,
  Dispatch,
  createContext,
  useContext,
} from "react";


function trivialDispatcher(
  _a: any,
): void {
  return;
}


// the DispatchContext gets a non-trivial dispatcher in the DerivedProvider
export const DispatchContext: Context<Dispatch<any>> = createContext(trivialDispatcher);

// Provides a dispatch function used for sending actions to update the state.
export function useDispatchContext(
) {
  return useContext(DispatchContext);
}
