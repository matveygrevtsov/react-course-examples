import { forwardRef, useRef } from "react";

interface IProps {
  backgroundColor: string;
  text: string;
}

const Component = forwardRef<HTMLDivElement, IProps>(
  ({ text, backgroundColor }, ref) => {
    return (
      <div ref={ref} style={{ backgroundColor }}>
        {text}
      </div>
    );
  }
);

export const Example21 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => console.log(ref.current);

  return (
    <>
      <button onClick={handleButtonClick}>Click me!</button>
      <Component text="Hello, world!" backgroundColor="#74992e" ref={ref} />
    </>
  );
};
