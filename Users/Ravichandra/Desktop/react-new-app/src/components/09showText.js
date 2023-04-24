import { React, useState } from "react";

const Show = () => {
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText === true && <h1> My Name is Pruthvi</h1>}
    </div>
  );
};
export default Show;
