import { useEffect, useState } from "react";
import s from "./styles.module.css";

const ChildComponent = () => {
  console.log(4);

  useEffect(() => {
    console.log(5);

    return () => console.log(6);
  }, []);

  return <div className={s.child}>ChildComponent</div>;
};

const ParentComponent = () => {
  console.log(1);

  useEffect(() => {
    console.log(2);

    return () => console.log(3);
  }, []);

  return (
    <div className={s.parent}>
      <div>ParentComponent</div>
      <ChildComponent />
    </div>
  );
};

export const Example10 = () => {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => setState((prevState) => !prevState);

  if (state) {
    return (
      <>
        <button onClick={handleClick}>Спрятать</button>
        <ParentComponent />
      </>
    );
  }

  return <button onClick={handleClick}>Показать</button>;
};
