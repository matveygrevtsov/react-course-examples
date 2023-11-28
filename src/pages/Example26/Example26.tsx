import { FC, PropsWithChildren } from "react";
import { IStore, Provider, useDispatch, useSelector } from "./redux";

import s from "./styles.module.css";

interface IState {
  count: number;
}

const store: IStore<IState> = {
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (prevState) => ({
      count: prevState.count + 1,
    }),
    decrement: (prevState) => ({
      count: prevState.count - 1,
    }),
  },
};

const ParentComponent: FC<PropsWithChildren> = ({ children }) => {
  const { count } = useSelector();
  return (
    <div className={s.box}>
      <span>ParentComponent: {count}</span>
      <div className={s.box}>{children}</div>
    </div>
  );
};

const ChildComponent = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch({
          type: "increment",
        })
      }
    >
      +
    </button>
  );
};

export const Example26 = () => {
  return (
    <Provider store={store}>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </Provider>
  );
};
