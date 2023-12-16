import {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from "react";

const TestComponent = () => {
  useEffect(() => console.log(1), []);
  useLayoutEffect(() => console.log(2), []);
  useInsertionEffect(() => console.log(3), []);

  return <div ref={() => console.log(4)} />;
};

export const Example37 = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => setVisible((isVisible) => !isVisible)}>
        Click
      </button>
      {isVisible && <TestComponent />}
    </>
  );
};
