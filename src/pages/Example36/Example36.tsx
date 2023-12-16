import { useDebugValue, useState } from "react";

const useMyHook = () => {
  const [value, setValue] = useState<number>(0);
  useDebugValue(value, (value) => `Hello, world: ${value}`);

  const handleClick = () => setValue((prevValue) => prevValue + 1);

  return { value, handleClick };
};

export const Example36 = () => {
  const { value, handleClick } = useMyHook();

  return <button onClick={handleClick}>{value}</button>;
};
