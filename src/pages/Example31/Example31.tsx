import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef<unknown, unknown>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        const input = inputRef.current;
        if (!input) return;
        input.value = "focus";
      },
      blur: () => {
        const input = inputRef.current;
        if (!input) return;
        input.value = "blur";
      },
      clientWidth: 666,
      message: () => console.log("Hello, world!"),
    }),
    []
  );

  return <input ref={inputRef} style={{ width: "200px" }} />;
});

export const Example31 = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClickFocus = () => ref.current?.focus();
  const handleClickBlur = () => ref.current?.blur();
  const handleClickWidth = () => console.log(ref.current?.clientWidth);
  const handleClickMessage = () => {
    const input = ref.current;
    if (!input) return;
    if ("message" in input && typeof input.message === "function") {
      input.message();
    }
  };

  return (
    <>
      <MyInput ref={ref} />
      <div>
        <button onClick={handleClickFocus}>focus</button>
        <button onClick={handleClickBlur}>blur</button>
        <button onClick={handleClickWidth}>width</button>
        <button onClick={handleClickMessage}>message</button>
      </div>
    </>
  );
};
