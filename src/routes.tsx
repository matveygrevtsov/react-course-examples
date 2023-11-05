import { ReactElement } from "react";
import { Example1 } from "./pages/Example1/Example1";
import { Example2 } from "./pages/Example2/Example2";
import { Example3 } from "./pages/Example3/Example3";
import { Example4 } from "./pages/Example4/Example4";

interface IRoute {
  title: string;
  description?: string;
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
    element: <Example2 />,
    image: {
      name: "stateWithoutUseState.png",
      maxWidth: 700,
    },
  },
  ["/example3"]: {
    title: "Батчинг",
    element: <Example3 />,
    image: {
      name: "batching.png",
      maxWidth: 700,
    },
  },
  ["/example4"]: {
    title: "setState асинхронный ?",
    element: <Example4 />,
    image: {
      name: "asyncSetState.png",
      maxWidth: 700,
    },
  },
};

export const routes = Object.keys(routesConfig);
