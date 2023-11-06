import { FC } from "react";

import s from "./styles.module.css";

interface IProps {
  title?: string;
  questions: string[];
}

export const QuestionList: FC<IProps> = ({ title, questions }) => {
  return (
    <div>
      <span>{title}</span>
      <ol className={s.list}>
        {questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
    </div>
  );
};
