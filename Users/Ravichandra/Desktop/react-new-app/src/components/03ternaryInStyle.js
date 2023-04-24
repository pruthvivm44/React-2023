import React from "react";

const TinS = () => {
  const isBrown = false;
  return (
    <div className="ts">
      {/*    condition  if      else */}
      <h1 style={{ color: isBrown ? "brown" : "red" }}> Brown</h1>
      {isBrown && <button>Brown</button>}
    </div>
  );
};

export default TinS;
