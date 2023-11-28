import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { Icon } from "./Icon";

const { PUBLIC_URL } = process.env; // Путь до папки public.

export const Example24 = () => {
  const soundRef = useRef(
    new Howl({
      src: [`${PUBLIC_URL}/shotgun.wav`],
      volume: 0.2,
    })
  );

  const handleClick = () => soundRef.current.play();

  useEffect(() => {
    return () => {
      soundRef.current.stop();
    };
  }, []);

  return (
    <button onClick={handleClick}>
      <Icon />
    </button>
  );
};
