import { React, useState } from "react";

const Color = () => {
  const [textColor, setTextColor] = useState("green");

  return (
    <div>
      <button
        onClick={() => {
          setTextColor(textColor === "green" ? "red" : "green");
        }}
      >
        Click me to Change Color
      </button>
      <h1 style={{ color: textColor }}>My name is Pruthvi V M</h1>
    </div>
  );
};

export default Color;
