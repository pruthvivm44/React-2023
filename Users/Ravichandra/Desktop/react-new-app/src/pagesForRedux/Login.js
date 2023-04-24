import { useState } from "react";
import { login, logout } from "../store";
//this hook is used to dispatch any actions or any functions in our store
//useDispatch is modifying states and useSelector is for getting states
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  return (
    <h1>
      {username}

      <input
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      {/* //it dispatch the username the user typed in the above input */}
      <button onClick={() => dispatch(login({ username: newUserName }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </h1>
  );
};
