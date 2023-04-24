import { React, useState, useEffect } from "react";
import Text from "./13text";

function UseEffect() {
  const [showText, setShowText] = useState(false);

  //if you want to execute an action only once when the component mount only you use [] empty array
  // if you want to trigger an specific states changes you put them in inside an array[]
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component UnMounted");
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {/* mounted  we mount the text bar inside this div tag after click the button*/}
      {/* after typing inside the text bar it was in the updating state*/}
      {/* clearing the text that is in the unmounting state */}
      <div>{showText && <Text />}</div>
    </div>
  );
}

export default UseEffect;
