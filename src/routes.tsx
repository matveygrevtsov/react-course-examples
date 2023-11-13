import { ReactElement } from "react";
import { QuestionList } from "./components/QuestionList/QuestionList";
import { Example1 } from "./pages/Example1/Example1";
import { Example2 } from "./pages/Example2/Example2";
import { Example3 } from "./pages/Example3/Example3";
import { Example4 } from "./pages/Example4/Example4";
import { Example7 } from "./pages/Example7/Example7";
import { Example8 } from "./pages/Example8/Example8";
import { Example9 } from "./pages/Example9/Example9";
import { Example10 } from "./pages/Example10/Example10";
import { Example11 } from "./pages/Example11/Example11";
import { Example12 } from "./pages/Example12/Example12";

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
  ["/example7"]: {
    title: "useEffect: базовый пример",
    element: <Example7 />,
    image: {
      name: "useEffectBaseExample.png",
      maxWidth: 700,
    },
  },
  ["/example8"]: {
    title: "useEffect: массив зависимостей",
    description:
      "Будет ли выведено сообщение в консоль после нажатия на кнопку ?",
    element: <Example8 />,
    image: {
      name: "useEffectDepsArray.png",
      maxWidth: 700,
    },
  },
  ["/example9"]: {
    title: "useEffect: unmounting-функция",
    description: "Что будет выведено в консоль после нажатия на кнопку ?",
    element: <Example9 />,
    image: {
      name: "useEffectUnmountingFunction1.png",
      maxWidth: 700,
    },
  },
  ["/example10"]: {
    title: "useEffect: первичный рендер",
    description: (
      <QuestionList
        title="Что будет выведено в консоль, когда мы нажмём на кнопку:"
        questions={[`"показать" ?`, `"спрятать" ?`]}
      />
    ),
    element: <Example10 />,
    image: {
      name: "useEffectChildAndParentComponentsMountOrder.png",
      maxWidth: 700,
    },
  },
  ["/example11"]: {
    title: "useEffect: объекты в массиве зависимостей",
    element: <Example11 />,
    description: (
      <QuestionList
        title="Что будет выведено в консоль, когда мы нажмём на:"
        questions={[`"Кнопку1" ?`, `"Кнопку2" ?`]}
      />
    ),
    image: {
      name: "useEffectObjectInDepsArray.png",
      maxWidth: 500,
    },
  },
  ["/example12"]: {
    title: "useEffect: нужен ли ререндер, чтобы сработал useEffect ?",
    element: <Example12 />,
    description: (
      <QuestionList
        title="Что будет выведено в консоль, когда мы нажмём на:"
        questions={[`"Кнопку1" ?`, `"Кнопку2" ?`]}
      />
    ),
    image: {
      name: "useEffectRerender.png",
      maxWidth: 500,
    },
  },
};

export const routes = Object.keys(routesConfig);
