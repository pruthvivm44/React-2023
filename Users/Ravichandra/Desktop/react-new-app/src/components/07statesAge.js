import { React, useState } from "react";

const Age = () => {
  // let age = 0;
  // useState(0) -> age initial value
  const [age, setAge] = useState(0);

  const IncreaseSize = () => {
    setAge(age + 1);
    // age = age + 1;
    console.log(age);
  };
  return (
    <div className="age">
      {age}
      <button onClick={IncreaseSize}>Increase Size by 1</button>
    </div>
  );
};
export default Age;
