import { useMemo } from "react";

function useRef<T>(initialValue?: T | null) {
  return useMemo(() => {
    function F(htmlElement: T) {
      F.current = htmlElement;
    }
    F.current = initialValue;
    return F;
  }, []);
}

export const Example23 = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => console.log(ref.current);

  return (
    <button ref={ref} onClick={handleClick}>
      Click!
    </button>
  );
};
