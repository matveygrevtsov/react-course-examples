import { useKeyPressEvent } from "react-use";
import { Handler } from "react-use/lib/useKey";

export const Example43 = () => {
  const handleKeyDown: Handler = (event) => {
    console.log("key down");
  };

  const handleKeyUp: Handler = (event) => {
    console.log("key up");
  };

  useKeyPressEvent("Enter", handleKeyDown, handleKeyUp);

  return null;
};
