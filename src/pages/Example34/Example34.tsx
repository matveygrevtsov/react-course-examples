import { useEffect, useLayoutEffect, useState } from "react";

const getRandomNumber = () => Math.floor(Math.random() * 10000 + 10000);

const ComponentUseEffect = () => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (value) return;
    setValue(getRandomNumber());
  }, [value]);

  return <button onClick={() => setValue(0)}>value: {value}</button>;
};

const ComponentUseLayoutEffect = () => {
  const [value, setValue] = useState<number>(0);

  useLayoutEffect(() => {
    if (value) return;
    setValue(getRandomNumber());
  }, [value]);

  return <button onClick={() => setValue(0)}>value: {value}</button>;
};

export const Example34 = () => {
  return (
    <div>
      <ComponentUseEffect />
      <ComponentUseLayoutEffect />
    </div>
  );
};
