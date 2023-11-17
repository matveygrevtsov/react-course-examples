import { useState, useEffect } from "react";

function useMemo<T>(
  functionToCalculateValue: () => T,
  dependencies: unknown[]
): T {
  const [value, setValue] = useState<T>(functionToCalculateValue);

  useEffect(() => setValue(functionToCalculateValue), [...dependencies]);

  return value;
}

export const Example14 = () => {
  const [state, setState] = useState<number>(0);

  const randomArray = useMemo(() => {
    const result = [];
    for (let i = 0; i < 1000000; ++i) {
      result.push(Math.random() + i);
    }
    return result.sort();
  }, []);

  const handleClick = () => {
    console.log("click");
    setState((prevState) => prevState + 1);
  };

  return <button onClick={handleClick}>{state}</button>;
};
