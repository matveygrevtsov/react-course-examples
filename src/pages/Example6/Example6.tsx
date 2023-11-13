import { useState } from "react";
import s from "./styles.module.css";

const { PUBLIC_URL } = process.env; // Путь до папки public.
const images = ["animals/1.jpg", "animals/2.jpg", "animals/3.jpg"];

export const Example6 = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleLeftClick = () => {
    setSlideIndex((prevSlideIndex) =>
      prevSlideIndex === 0 ? images.length - 1 : prevSlideIndex - 1
    );
  };

  const handleRightClick = () => {
    setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % images.length);
  };

  return (
    <div className={s.root}>
      <button onClick={handleLeftClick}>{"<"}</button>
      <div
        className={s.slide}
        style={{
          backgroundImage: `url('${PUBLIC_URL}/${images[slideIndex]}')`,
        }}
      />
      <button onClick={handleRightClick}>{">"}</button>
    </div>
  );
};
