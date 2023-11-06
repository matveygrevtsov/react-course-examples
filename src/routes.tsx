import { ReactElement } from "react";
import { QuestionList } from "./components/QuestionList/QuestionList";
import { Example1 } from "./pages/Example1/Example1";
import { Example2 } from "./pages/Example2/Example2";
import { Example3 } from "./pages/Example3/Example3";
import { Example4 } from "./pages/Example4/Example4";

interface IRoute {
  title: ReactElement | string;
  description?: ReactElement | string;
  element: ReactElement;
  image?: {
    name: string; // Название картинки в папке "public/examplesImages".
    maxWidth?: number;
  };
}

export const routesConfig: Record<string, IRoute> = {
  ["/example1"]: {
    title: "useState: базовый пример",
    element: <Example1 />,
    image: {
      name: "fcBaseExample.png",
      maxWidth: 700,
    },
  },
  ["/example2"]: {
    title: "Возможно ли реализовать стейт без useState ?",
    description: (
      <QuestionList
        title={`После нажатия на кнопку "+"`}
        questions={[
          "Что будет выведено в консоль ?",
          "Какое число отобразится над кнопкой ?",
        ]}
      />
    ),
    element: <Example2 />,
    image: {
      name: "stateWithoutUseState.png",
      maxWidth: 700,
    },
  },
  ["/example3"]: {
    title: "Батчинг",
    description: `Сколько раз в консоль выведется строка "rerender" после нажатия на кнопку "Прибавить 10" ?`,
    element: <Example3 />,
    image: {
      name: "batching.png",
      maxWidth: 700,
    },
  },
  ["/example4"]: {
    title: "setState асинхронный ?",
    description: (
      <QuestionList
        questions={[
          "Какое число отобразится над кнопками после нажатия на вторую (правую) кнопку ?",
          `Можем ли мы утверждать, что после нажатия на первую (левую) кнопку, в консоль сначала будет выведена строка "loop finished", а затем - всё остальное ?`,
        ]}
      />
    ),
    element: <Example4 />,
    image: {
      name: "asyncSetState.png",
      maxWidth: 700,
    },
  },
};

export const routes = Object.keys(routesConfig);
