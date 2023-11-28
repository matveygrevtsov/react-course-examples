import { useState } from "react";

const refFunction = (div: HTMLDivElement) => {
  console.log(div);
};

const ChildElement = () => {
  return (
    <div ref={refFunction} style={{ backgroundColor: "#74992e" }}>
      Hello, world!
    </div>
  );
};

export const Example22 = () => {
  const [showChild, setShowChild] = useState<boolean>(false);
  const handleButtonClick = () => {
    setShowChild((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        {showChild ? "Спрятать" : "Показать"}
      </button>
      {showChild && <ChildElement />}
    </>
  );
};
