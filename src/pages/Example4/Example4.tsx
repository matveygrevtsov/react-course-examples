import { useState } from "react";

import s from "./styles.module.css";

export const Example4 = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickFirst = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => {
        console.log(`setCount (i = ${i})`);
        return prevCount + 1;
      });
    }
    console.log("loop finished");
  };

  const handleClickSecond = () => {
    for (let i = 0; i < 10; i++) {
      setCount(count + 1);
    }
  };

  return (
    <div className={s.root}>
      <div>{count}</div>
      <div>
        <button onClick={handleClickFirst}>+10</button>
        <button onClick={handleClickSecond}>+10</button>
      </div>
    </div>
  );
};



