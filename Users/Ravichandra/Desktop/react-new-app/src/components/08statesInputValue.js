import { React, useState } from "react";

const Input = () => {
  const [inputValues, setInputValues] = useState("");
  const EnteredValue = (event) => {
    setInputValues(event.target.value);
  };
  return (
    <div className="input">
      <input onChange={EnteredValue} type="text" />
      {inputValues}
    </div>
  );
};
export default Input;
