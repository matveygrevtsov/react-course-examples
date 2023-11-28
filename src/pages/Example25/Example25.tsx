import { FC, PropsWithChildren, createContext, useContext } from "react";

interface IContextData {
  message: string;
}

const myContext = createContext<IContextData>({
  message: "default message",
});

const ChildComponent: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

const ComponentWithMessage = () => {
  const contextData = useContext(myContext);
  console.log("rerender");

  return <h1>{contextData.message}</h1>;
};

export const Example25 = () => {
  return (
    <myContext.Provider
      value={{
        message: "Hello, world!",
      }}
    >
      <ChildComponent>
        <ChildComponent>
          <ChildComponent>
            <ChildComponent>
              <ComponentWithMessage />
            </ChildComponent>
          </ChildComponent>
        </ChildComponent>
      </ChildComponent>
    </myContext.Provider>
  );
};
