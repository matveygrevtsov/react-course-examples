import { useEffect, useState } from "react";

const initialState = {
  x: 1,
};

export const Example11 = () => {
  const [state1, setState1] = useState(initialState);
  const [state2, setState2] = useState(initialState);

  const handleClick1 = () => {
    setState1({
      x: 1,
    });
  };

  const handleClick2 = () => setState2(initialState);

  useEffect(() => {
    console.log(1);
    return () => console.log(2);
  }, [state1, state2]);

  return (
    <div>
      <button onClick={handleClick1}>Кнопка1</button>
      <button onClick={handleClick2}>Кнопка2</button>
    </div>
  );
};
