import { ReactElement } from "react";
import { QuestionList } from "./components/QuestionList/QuestionList";
import { Example1 } from "./pages/Example1/Example1";
import { Example2 } from "./pages/Example2/Example2";
import { Example3 } from "./pages/Example3/Example3";
import { Example4 } from "./pages/Example4/Example4";
import { Example5 } from "./pages/Example5/Example5";
import { Example6 } from "./pages/Example6/Example6";
import { Example7 } from "./pages/Example7/Example7";
import { Example8 } from "./pages/Example8/Example8";
import { Example9 } from "./pages/Example9/Example9";
import { Example10 } from "./pages/Example10/Example10";
import { Example11 } from "./pages/Example11/Example11";
import { Example12 } from "./pages/Example12/Example12";
import { Example13 } from "./pages/Example13/Example13";
import { Example14 } from "./pages/Example14/Example14";
import { Example15 } from "./pages/Example15/Example15";
import { Example16 } from "./pages/Example16/Example16";
import { Example17 } from "./pages/Example17/Example17";
import { Example18 } from "./pages/Example18/Example18";
import { Example20 } from "./pages/Example20/Example20";
import { Example21 } from "./pages/Example21/Example21";
import { Example22 } from "./pages/Example22/Example22";
import { Example23 } from "./pages/Example23/Example23";
import { Example24 } from "./pages/Example24/Example24";
import { Example25 } from "./pages/Example25/Example25";
import { Example26 } from "./pages/Example26/Example26";
import { Example27 } from "./pages/Example27/Example27";
import { Example28 } from "./pages/Example28/Example28";
import { Example29 } from "./pages/Example29/Example29";
import { Example31 } from "./pages/Example31/Example31";
import { Example32 } from "./pages/Example32/Example32";
import { Example33 } from "./pages/Example33/Example33";
import { Example34 } from "./pages/Example34/Example34";
import { Example35 } from "./pages/Example35/Example35";
import { Example36 } from "./pages/Example36/Example36";
import { Example37 } from "./pages/Example37/Example37";
import { Example38 } from "./pages/Example38/Example38";
import { Example39 } from "./pages/Example39/Example39";
import { Example40 } from "./pages/Example40/Example40";
import { Example41 } from "./pages/Example41/Example41";
import { Example42 } from "./pages/Example42/Example42";
import { Example43 } from "./pages/Example43/Example43";
import { Example44 } from "./pages/Example44/Example44";
import { Example45 } from "./pages/Example45/Example45";
import { Example46 } from "./pages/Example46/Example46";
import { Example47 } from "./pages/Example47/Example47";

interface IRoute {
  title: ReactElement | string;
  description?: ReactElement | string;
  element?: ReactElement;
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
  ["/example5"]: {
    title: "useState: можно ли менять начальное состояние через пропсы ?",
    element: <Example5 />,
    image: {
      name: "useStateInitialStateFromProps.png",
      maxWidth: 700,
    },
  },
  ["/example6"]: {
    title: "useState: реализация простейшего слайдера",
    element: <Example6 />,
    image: {
      name: "useStateSlider.png",
      maxWidth: 600,
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
  ["/example13"]: {
    title: "useMemo: базовый пример",
    element: <Example13 />,
    description:
      "После нажатия на левую кнопку, счётчик обновляется лишь спустя секунду, потому что длинный массив при каждом перерендере вычисляется и сортируется заново, что полностью блокирует процесс рендеринга UI. После нажатия на правую кнопку, такой проблемы не наблюдается, потому что соответствующий компонент использует хук useMemo.",
    image: {
      name: "useMemoBaseExample.png",
      maxWidth: 1200,
    },
  },
  ["/example14"]: {
    title: "useMemo: кастомная реализация",
    element: <Example14 />,
    image: {
      name: "useMemoCustom.png",
      maxWidth: 700,
    },
  },
  ["/example15"]: {
    title: "useCallback: базовый пример",
    element: <Example15 />,
    image: {
      name: "useCallbackBaseExample.png",
      maxWidth: 900,
    },
  },
  ["/example16"]: {
    title: "useCallback: кастомная реализация",
    element: <Example16 />,
    image: {
      name: "useCallbackCustomRealization.png",
      maxWidth: 600,
    },
  },
  ["/example17"]: {
    title:
      "useCallback: является ли мемоизированной функция, которая вычислена при помощи мемоизированной функции, но при этом не обёрнута в useCallback ?",
    description: "Что будет выведено в консоль после нажатия на кнопку ?",
    element: <Example17 />,
    image: {
      name: "useCallbackFuncToProps.png",
      maxWidth: 700,
    },
  },
  ["/example18"]: {
    title: "useReducer: базовый пример",
    element: <Example18 />,
    image: {
      name: "useReducerBaseExample.png",
      maxWidth: 1100,
    },
  },
  ["/example19"]: {
    title: "useReducer: кастомная реализация",
    image: {
      name: "useReducerCustomRealization.png",
      maxWidth: 1000,
    },
  },
  ["/example20"]: {
    title: "useRef: базовый пример",
    element: <Example20 />,
    image: {
      name: "useRefBaseExample.png",
      maxWidth: 700,
    },
  },
  ["/example21"]: {
    title: "useRef: передача реф в пропсы",
    element: <Example21 />,
    image: {
      name: "useRefForwardRef.png",
      maxWidth: 700,
    },
  },
  ["/example22"]: {
    title: "useRef: передача функции в проп ref",
    description: (
      <QuestionList
        title="Что будет выведено в консоль, когда мы нажмём на:"
        questions={[`Кнопку "Показать" ?`, `Кнопку "Спрятать" ?`]}
      />
    ),
    element: <Example22 />,
    image: {
      name: "useRefFunctionToRefProp.png",
      maxWidth: 600,
    },
  },
  ["/example23"]: {
    title: "useRef: кастомная реализация",
    element: <Example23 />,
    image: {
      name: "useRefCustomRealization.png",
      maxWidth: 700,
    },
  },
  ["/example24"]: {
    title: "useRef: использование «не по назначению»",
    element: <Example24 />,
    image: {
      name: "useRefSound.png",
      maxWidth: 600,
    },
  },
  ["/example25"]: {
    title: "useContext: базовый пример",
    element: <Example25 />,
    image: {
      name: "useContextBaseExample.png",
      maxWidth: 500,
    },
  },
  ["/example26"]: {
    title: "useContext: кастомный redux",
    element: <Example26 />,
    image: {
      name: "useContextCustomRedux.png",
      maxWidth: 1000,
    },
  },
  ["/example27"]: {
    title: "useId: базовый пример",
    element: <Example27 />,
    image: {
      name: "useIdBaseExample.png",
      maxWidth: 700,
    },
  },
  ["/example28"]: {
    title: "useId: кастомная реализация",
    element: <Example28 />,
    image: {
      name: "useIdCustom.png",
      maxWidth: 600,
    },
  },
  ["/example29"]: {
    title: "useDeferredValue",
    element: <Example29 />,
    image: {
      name: "useDeferredValueBaseExample.png",
      maxWidth: 750,
    },
  },
  ["/example30"]: {
    title: "useDeferredValue",
    element: <Example29 />,
    image: {
      name: "useDeferredValueBaseExample.png",
      maxWidth: 750,
    },
  },
  ["/example31"]: {
    title: "useImperativeHandle: базовый пример",
    element: <Example31 />,
    image: {
      name: "useImperativeHandle.png",
      maxWidth: 450,
    },
  },
  ["/example32"]: {
    title: "useImperativeHandle: абстрактный пример практического применения",
    element: <Example32 />,
    image: {
      name: "useImperativeHandleAbstractExample.png",
      maxWidth: 700,
    },
  },
  ["/example33"]: {
    title:
      "useLayoutEffect: анимация, демонстрирующая разницу между useEffect и useLayoutEffect",
    element: <Example33 />,
    image: {
      name: "useLayoutEffect.png",
      maxWidth: 500,
    },
  },
  ["/example34"]: {
    title:
      "useLayoutEffect: генератор случайного числа, демонстрирующий разницу между useEffect и useLayoutEffect",
    element: <Example34 />,
    image: {
      name: "useLayoutEffect2.png",
      maxWidth: 550,
    },
  },
  ["/example35"]: {
    title: "useTransition: табуляция",
    element: <Example35 />,
    image: {
      name: "useTransition.png",
      maxWidth: 460,
    },
  },
  ["/example36"]: {
    title: "useDebugValue",
    element: <Example36 />,
    image: {
      name: "useDebugValue.png",
      maxWidth: 700,
    },
  },
  ["/example37"]: {
    title: "useInsertionEffect: базовый пример",
    description: "Что будет выведено в консоль после нажатия на кнопку ?",
    element: <Example37 />,
    image: {
      name: "useInsertionEffect.png",
      maxWidth: 700,
    },
  },
  ["/example38"]: {
    title: "useInsertionEffect: использование setState",
    element: <Example38 />,
    image: {
      name: "useInsertionEffectSetState.png",
      maxWidth: 700,
    },
  },
  ["/example39"]: {
    title: "useSyncExternalStore",
    element: <Example39 />,
    image: {
      name: "useExternalStore.png",
      maxWidth: 1170,
    },
  },
  ["/example40"]: {
    title: "useClickAway",
    element: <Example40 />,
    image: {
      name: "useClickAway.png",
      maxWidth: 1000,
    },
  },
  ["/example41"]: {
    title: "useWindowSize",
    element: <Example41 />,
    image: {
      name: "useWindowSize.png",
      maxWidth: 700,
    },
  },
  ["/example42"]: {
    title: "useScroll",
    element: <Example42 />,
    image: {
      name: "useScroll.png",
      maxWidth: 500,
    },
  },
  ["/example43"]: {
    title: "useKeyPressEvent",
    element: <Example43 />,
    image: {
      name: "useKeyPressEvent.png",
      maxWidth: 700,
    },
  },
  ["/example44"]: {
    title: "useLocalStorage",
    element: <Example44 />,
    image: {
      name: "useLocalStorage.png",
      maxWidth: 700,
    },
  },
  ["/example45"]: {
    title: "useSpeech",
    element: <Example45 />,
    image: {
      name: "useSpeech.png",
      maxWidth: 700,
    },
  },
  ["/example46"]: {
    title: "useFavicon",
    element: <Example46 />,
    image: {
      name: "useFavicon.png",
      maxWidth: 700,
    },
  },
  ["/example47"]: {
    title: "useUpdate",
    element: <Example47 />,
    image: {
      name: "useUpdate.png",
      maxWidth: 700,
    },
  },
};

export const routes = Object.keys(routesConfig);
