import { useReducer } from "react";
import { EActionType, initialState, reducer } from "./constants";

export const Example17 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>count: {state.count}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: EActionType.Decrement,
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({
              type: EActionType.Increment,
            })
          }
        >
          +
        </button>
      </div>
    </>
  );
};
