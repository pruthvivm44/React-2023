import { React, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeUserName = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUsername);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};
export default ChangeUserName;
