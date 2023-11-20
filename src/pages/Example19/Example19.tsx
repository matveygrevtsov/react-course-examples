import { useState } from "react";

function useReducer<State, Action>(
  reducer: (prevState: State, action: Action) => State,
  initialState: State,
  initializer?: (initialState: State) => State
) {
  const [state, setState] = useState<State>(
    initializer ? initializer(initialState) : initialState
  );

  const dispatch = (action: Action) => {
    setState((prevState) => reducer(prevState, action));
  };

  return [state, dispatch];
}
