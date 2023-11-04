import { ReactElement } from "react";
import { Example1 } from "./pages/Example1/Example1";
import { Example2 } from "./pages/Example2/Example2";
import { Example3 } from "./pages/Example3/Example3";
import { Example4 } from "./pages/Example4/Example4";

interface IRoute {
  title: string;
  description?: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  ["/example1"]: {
    title: "useState: базовый пример",
    element: <Example1 />,
  },
  ["/example2"]: {
    title: "Стейт без useState",
    description: "Почему не получится инициализировать состояние без useState",
    element: <Example2 />,
  },
  ["/example3"]: {
    title: "Батчинг",
    element: <Example3 />,
  },
  ["/example4"]: {
    title: "setState асинхронный ?",
    element: <Example4 />,
  },
};

export const routes = Object.keys(routesConfig);
