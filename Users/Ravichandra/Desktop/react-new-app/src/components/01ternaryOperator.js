import React from "react";
import ChangeUserName from "./18changeUsername";
import { useContext } from "react";
import { AppContext } from "../App";

const Ternary = () => {
  //grap the props userName from AppContext using useContext
  const { userName } = useContext(AppContext);
  const age = 20;
  return (
    <div className="age">
      <h1>This is Ternary Operator page and username is {userName}</h1>
      <h1>TERNARY EXAMPLE</h1>
      {age >= 19 ? <h1>Over age</h1> : <h1>Under age</h1>}
      {/* <ChangeUserName setUserName={props.setUserName} /> */}
      <ChangeUserName />
    </div>
  );
};

export default Ternary;
