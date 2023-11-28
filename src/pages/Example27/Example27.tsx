import { useId } from "react";

const getRandomInt = (min: number, max: number) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
};

const getRandomColorRGB = () => {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

export const Example27 = () => {
  const id = useId();

  const handleClick = () => {
    const button = document.getElementById(id);
    if (!button) return;
    button.style.background = getRandomColorRGB();
  };

  return (
    <button onClick={handleClick} id={id}>
      Click me!
    </button>
  );
};
