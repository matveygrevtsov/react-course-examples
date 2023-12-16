import { FC } from "react";

import s from "./styles.module.css";

interface IProps {
  words: string[];
}

export const WordsList: FC<IProps> = ({ words }) => {
  return (
    <ul className={s.root}>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
};
