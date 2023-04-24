import React from "react";

const Style = () => {
  return (
    <div className="Style">
      <h1>INLINE STYLE EXAMPLE</h1>
      <h1 style={{ color: "red", backgroundColor: "yellow", fontSize: "30px" }}>
        This is RED Color Text
      </h1>
      <h1 style={{ color: "green" }}>This is GREEN Color Text</h1>
      <h1 style={{ color: "blue" }}>This is BLUE Color Text</h1>
    </div>
  );
};
export default Style;
