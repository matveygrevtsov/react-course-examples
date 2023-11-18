export interface IState {
  count: number;
}

export enum EActionType {
  Decrement = "Decrement",
  Increment = "Increment",
}

export interface IAction {
  type: EActionType;
}

export type TReducerFunction = (prevState: IState, action: IAction) => IState;

export const reducerFunctionForEachActionType: Record<
  EActionType,
  TReducerFunction
> = {
  [EActionType.Decrement]: (prevState, action) => ({
    count: prevState.count - 1,
  }),
  [EActionType.Increment]: (prevState, action) => ({
    count: prevState.count + 1,
  }),
};

export const reducer: TReducerFunction = (prevState, action) => {
  return reducerFunctionForEachActionType[action.type](prevState, action);
};

export const initialState: IState = {
  count: 0,
};
