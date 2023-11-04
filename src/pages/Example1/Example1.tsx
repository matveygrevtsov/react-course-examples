import { FC, useState } from "react";

import s from "./styles.module.css";

interface IProps {
  backgroundColor?: string;
}

export const Example1: FC<IProps> = ({ backgroundColor }) => {
  const [state, setState] = useState<number>(0);

  const handleClickMinus = () => setState((prevState) => prevState - 1);

  const handleClickPlus = () => setState((prevState) => prevState + 1);

  return (
    <div className={s.root} style={{ backgroundColor }}>
      <div>{state}</div>
      <div>
        <button className={s.button} onClick={handleClickMinus}>
          -
        </button>
        <button className={s.button} onClick={handleClickPlus}>
          +
        </button>
      </div>
    </div>
  );
};




