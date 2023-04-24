import { React } from "react";
import { useToggle } from "./22useToggle";

const ToggleFunction = () => {
  //here we changed data ie-> instead of using state we used isVisible and also
  //we can use isVisible2, toggle2, isVisible3 and so on....
  const [isVisible, toggle] = useToggle();
  return (
    <div>
      {isVisible && <h1>Hidden Text</h1>}
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
};
export default ToggleFunction;
