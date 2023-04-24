import { useState } from "react";

const useCount = (initValue = 0) => {
  const [count, setCount] = useState(initValue);
  const increase = () => {
    //prev is callback function for your previous data ie=> count count +1
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return { count, increase, decrease, reset };
};
export default useCount;
