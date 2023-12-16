import { useMemo } from "react";
import { words } from "../../words";
import s from "./styles.module.css";

const getRandomSortValue = () => {
  const random = Math.random();
  return random < 0.5 ? -1 : 1;
};

export const WordsList = () => {
  const sortedWords = useMemo(() => [...words].sort(getRandomSortValue), []);

  return (
    <ul className={s.root}>
      {sortedWords.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
};
