import { useEffect, useState } from "react";

export const Example9 = () => {
  const [state, setState] = useState<boolean>(true);

  const handleClick = () => {
    setState((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(1);

    return function () {
      console.log(2);
    };
  }, [state]);

  return <button onClick={handleClick}>{`${state}`}</button>;
};
