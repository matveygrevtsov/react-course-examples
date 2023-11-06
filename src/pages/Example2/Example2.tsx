export const Example2 = () => {
  let state: number = 0;

  const handleClick = () => {
    ++state;
    console.log(state);
  };

  return (
    <>
      <div>{state}</div>
      <button onClick={handleClick}>+</button>
    </>
  );
};

