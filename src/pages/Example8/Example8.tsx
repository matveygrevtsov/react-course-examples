import { useEffect } from "react";

export const Example8 = () => {
  let count = 0;

  const handleClick = () => ++count;

  useEffect(
    () => console.log(`Переменная count изменилась! Теперь count=${count}.`),
    [count]
  );

  return <button onClick={handleClick}>+</button>;
};
