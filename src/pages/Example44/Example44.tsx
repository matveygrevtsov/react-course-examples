import { useLocalStorage } from "react-use";

export const Example44 = () => {
  const [value, setValue] = useLocalStorage("counter", 0);

  const handleDecrementClick = () => {
    setValue(value === undefined ? undefined : value - 1);
  };

  const handleIncrementClick = () => {
    setValue(value === undefined ? undefined : value + 1);
  };

  return (
    <div>
      <button onClick={handleDecrementClick}>-</button>
      {value}
      <button onClick={handleIncrementClick}>+</button>
    </div>
  );
};
