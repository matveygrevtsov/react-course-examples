import s from "./style.module.css";

export const Example2 = () => {
  let state: number = 0;

  const handleClickMinus = () => {
    --state;
    console.log(state);
  };

  const handleClickPlus = () => {
    ++state;
    console.log(state);
  };

  return (
    <div className={s.root}>
      <div>{state}</div>
      <div>
        <button className={s.button} onClick={handleClickMinus}>
          -
        </button>
        <button className={s.button} onClick={handleClickPlus}>
          +
        </button>
      </div>
    </div>
  );
};



