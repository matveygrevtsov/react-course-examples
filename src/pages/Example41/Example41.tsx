import { useWindowSize } from "react-use";

export const Example41 = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};
