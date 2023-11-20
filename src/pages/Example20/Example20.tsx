import { useRef } from "react";

const getRandomInt = (min: number, max: number) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
};

export const Example20 = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    const button = ref.current;
    if (!button) return;
    const red = getRandomInt(0, 255);
    const green = getRandomInt(0, 255);
    const blue = getRandomInt(0, 255);
    button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <button
      ref={ref}
      onClick={handleButtonClick}
      style={{ transition: "background-color 0.2s ease-in-out" }}
    >
      Click me!
    </button>
  );
};
