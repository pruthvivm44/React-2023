import { React } from "react";
import useCount from "./24useCount";

const CountHook = () => {
  const { count, increase, decrease, reset } = useCount();
  return (
    <div>
      <h1> {count}</h1>

      <button onClick={increase}>Increase Size</button>
      <button onClick={decrease}>Decrease Size</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CountHook;
