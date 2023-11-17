import { useMemo, useState } from "react";

const getRandomArray = () => {
  const result = [];
  for (let i = 0; i < 1000000; ++i) {
    result.push(Math.random() + i);
  }
  return result;
};

const StupidComponent = () => {
  const [state, setState] = useState<number>(0);
  const randomArray = getRandomArray().sort();

  return (
    <button
      style={{ backgroundColor: "#E45649" }}
      onClick={() => setState((prevState) => prevState + 1)}
    >
      {state}
    </button>
  );
};

const SmartComponent = () => {
  const [state, setState] = useState<number>(0);
  const randomArray = useMemo(() => getRandomArray().sort(), []);

  return (
    <button
      style={{ backgroundColor: "#50A14F" }}
      onClick={() => setState((prevState) => prevState + 1)}
    >
      {state}
    </button>
  );
};

export const Example13 = () => {
  return (
    <div>
      <StupidComponent />
      <SmartComponent />
    </div>
  );
};
