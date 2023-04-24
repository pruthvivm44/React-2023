import { useState } from "react";

export const useToggle = (initialValue = false) => {
  //return the data inside the array[] it can acces from other component and instead of state we can use inVisible
  //if you return the data inside the object {} then use the same data in the other components
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    //set the opposite value
    setState((prev) => !prev);
  };
  return [state, toggle];
};
