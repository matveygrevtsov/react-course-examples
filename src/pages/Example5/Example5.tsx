import { FC, useState } from "react";

interface IChildProps {
  value: number;
}

const Child: FC<IChildProps> = ({ value }) => {
  const [state, setState] = useState(value);

  return (
    <div>
      <div>{`state=${state}`}</div>
      <button onClick={() => setState((prevState) => prevState - 1)}>-</button>
    </div>
  );
};

export const Example5 = () => {
  const [state, setState] = useState(5);

  return (
    <>
      <div>{state}</div>
      <button onClick={() => setState((prevState) => prevState + 1)}>+</button>
      <Child value={state} />
    </>
  );
};
