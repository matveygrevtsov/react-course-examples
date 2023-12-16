import { useInsertionEffect, useState } from "react";

export const Example38 = () => {
  const [state, setState] = useState<number>(0);

  useInsertionEffect(() => setState(1), []);

  return <div>{state}</div>;
};
