import { useRef } from "react";
import { useScroll } from "react-use";

import s from "./styles.module.css";

export const Example42 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useScroll(ref);

  return (
    <>
      <div>scrollX: {x}</div>
      <div>scrollY: {y}</div>
      <div ref={ref} className={s.scrollable}>
        <div className={s.box} />
      </div>
    </>
  );
};
