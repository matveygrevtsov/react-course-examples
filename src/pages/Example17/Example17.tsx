import { FC, useCallback, useEffect, useState } from "react";

interface IProps {
  func: () => void;
}

const ChildComponent: FC<IProps> = ({ func }) => {
  useEffect(() => console.log(2), [func]);

  return <div />;
};

export const Example17 = () => {
  const [state, setState] = useState<number>(0);

  const func = useCallback(() => console.log(1), []);

  return (
    <>
      <button onClick={() => setState((prevState) => prevState + 1)}>
        {state}
      </button>
      <ChildComponent func={() => func()} />
    </>
  );
};


