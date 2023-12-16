import { FC, useEffect, useLayoutEffect, useState } from "react";
import s from "./styles.module.css";

interface IBoxProps {
  size: number;
  label: string;
}

const Box: FC<IBoxProps> = ({ size, label }) => {
  console.log(`${label}: ${size}`);

  return (
    <div
      className={s.square}
      style={{
        transition: "width 5s ease-in-out, height 5s ease-in-out",
        width: `${50 * size}px`,
        height: `${50 * size}px`,
      }}
    >
      {label}
    </div>
  );
};

const ComponentUseEffect = () => {
  const [size, setSize] = useState<number>(1);
  useEffect(() => setSize((prevSize) => prevSize * 2), []);

  return <Box size={size} label="useEffect" />;
};

const ComponentUseLayoutEffect = () => {
  const [size, setSize] = useState<number>(1);
  useLayoutEffect(() => setSize((prevSize) => prevSize * 2), []);

  return <Box size={size} label="useLayoutEffect" />;
};

export const Example33 = () => {
  return (
    <div className={s.root}>
      <ComponentUseEffect />
      <ComponentUseLayoutEffect />
    </div>
  );
};
