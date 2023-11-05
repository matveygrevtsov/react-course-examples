import { useState } from "react";

import s from "./styles.module.css";

export const Example3 = () => {
  console.log("rerender");

  const [count, setCount] = useState<number>(0);

  const handleClickFirst = () => setCount((prevCount) => prevCount + 1);

  const handleClickSecond = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className={s.root}>
      <div>{count}</div>
      <div>
        <button onClick={handleClickFirst}>Прибавить 1</button>
        <button onClick={handleClickSecond}>Прибавить 10</button>
      </div>
    </div>
  );
};
