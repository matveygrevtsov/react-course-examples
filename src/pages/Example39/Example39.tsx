import { useSyncExternalStore } from "react";
import s from "./styles.module.css";

class Store<T> {
  private state: T;
  private readonly callbacks: Set<() => void>;

  constructor(initialState: T) {
    this.state = initialState;
    this.callbacks = new Set();
  }

  public subscribe(callback: () => void) {
    this.callbacks.add(callback);
    return () => this.callbacks.delete(callback);
  }

  public getState() {
    return this.state;
  }

  public setState(newState: T) {
    this.state = newState;
    this.callbacks.forEach((callbacks) => callbacks());
  }
}

const counterStore = new Store(0);
const subscribe = (callback: () => void) => counterStore.subscribe(callback);
const getSnapshot = () => counterStore.getState();

const useCounterStore = () => {
  const count = useSyncExternalStore(subscribe, getSnapshot);

  return {
    count,
    decrement: () => counterStore.setState(count - 1),
    increment: () => counterStore.setState(count + 1),
  };
};

const Counter = () => {
  const { count, decrement, increment } = useCounterStore();

  return (
    <div className={s.counter}>
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export const Example39 = () => {
  return (
    <div className={s.root}>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};
