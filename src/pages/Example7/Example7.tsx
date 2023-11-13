import { useEffect, useState } from "react";

export const Example7 = () => {
  const [time, setTime] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);

  const handleSpeedClick = () => {
    setSpeed((prevSpeed) => (prevSpeed === 1 ? 2 : 1));
  };

  useEffect(() => {
    const timer = window.setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000 / speed
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [speed]);

  return (
    <>
      <span>{time}</span>
      <button onClick={handleSpeedClick}>Скорость: {speed}x</button>
    </>
  );
};



