import { useRef } from "react";
import { useClickAway } from "react-use";

export const Example40 = () => {
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => console.log(1));

  return (
    <div
      ref={ref}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "black",
        flexShrink: 0,
      }}
    />
  );
};
