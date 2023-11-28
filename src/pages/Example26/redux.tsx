import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CUSTOM_EVENT_NAME = "REDUX_DISPATCH";

interface IAction<Payload> {
  type: string;
  payload?: Payload;
}

type TDispatchEvent = CustomEventInit<IAction<unknown>>;

type TReducerFunction<State> = (
  prevState: State,
  action: IAction<unknown>
) => State;

type TReducers<State> = Record<string, TReducerFunction<State>>;

export interface IStore<State> {
  initialState: State;
  reducers: TReducers<State>;
}

interface IProviderProps<State> {
  store: IStore<State>;
}

const context = createContext<any>(undefined);

export function useSelector() {
  return useContext(context);
}

export function useDispatch() {
  return (action: IAction<unknown>) =>
    window.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT_NAME, { detail: action })
    );
}

export function Provider<State>({
  store,
  children,
}: PropsWithChildren<IProviderProps<State>>) {
  const [value, setValue] = useState(store.initialState);

  useEffect(() => {
    const handleDispatch = (event: TDispatchEvent) => {
      const action = event.detail;
      if (!action) return;
      setValue((prevValue) => store.reducers[action.type](prevValue, action));
    };
    window.addEventListener(CUSTOM_EVENT_NAME, handleDispatch);
    return () => window.removeEventListener(CUSTOM_EVENT_NAME, handleDispatch);
  }, [setValue, store]);

  return <context.Provider value={value}>{children}</context.Provider>;
}
