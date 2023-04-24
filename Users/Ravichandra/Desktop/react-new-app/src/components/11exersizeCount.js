import { React, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  //   const IncCount = () => {
  //     setCount(count + 1);
  //   };
  //   const DecCount = () => {
  //     setCount(count - 1);
  //   };
  //   const SetZero = () => {
  //     setCount(0);
  //   };
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero
      </button>
      <br />
      {count}
    </div>
  );
}

export default Count;
