import { ChangeEvent, useEffect, useMemo, useState } from "react";

function useCallback<Arg, Return>(
  func: (...args: Arg[]) => Return,
  dependencies: unknown[]
) {
  return useMemo(() => func, dependencies);
}

export const Example16 = () => {
  const [text, setText] = useState<string>("");

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  useEffect(
    () =>
      console.log(
        "О, нет ! Функция handleInputChange инициализировалась заново !"
      ),
    [handleInputChange]
  );

  return <input value={text} onChange={handleInputChange} />;
};
