import { useEffect, useState } from "react";

export const Example12 = () => {
  const [state, setState] = useState({
    x: 1,
  });

  const handleClick1 = () => {
    state.x = state.x + 1;
  };

  const handleClick2 = () => {
    setState((prevState) => ({ x: prevState.x + 1 }));
  };

  useEffect(() => console.log(1), [state]);

  return (
    <>
      <div>{`x=${state.x}`}</div>
      <div>
        <button onClick={handleClick1}>Кнопка1</button>
        <button onClick={handleClick2}>Кнопка2</button>
      </div>
    </>
  );
};
