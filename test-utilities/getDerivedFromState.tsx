import { renderHook } from "@testing-library/react"

import { type Derived, useDerived } from "@shared/utilities/derived"
import { type State } from "@shared/utilities/state"


export function getDerivedFromState(
  state: State,
): Derived {
  const { result } = renderHook(() => useDerived(state))
  return result.current
}
