import { useMemo, useState } from "react";

let random = 0;

function useId() {
  return useMemo(() => {
    ++random;
    return `${random}`;
  }, []);
}

export const Example28 = () => {
  console.log("render!");
  const [state, setState] = useState<number>(0);

  const id1 = useId();
  const id2 = useId();

  return (
    <>
      <button onClick={() => setState((prevState) => prevState + 1)}>
        Click me!
      </button>
      <div>id1: {id1}</div>
      <div>id2: {id2}</div>
    </>
  );
};
