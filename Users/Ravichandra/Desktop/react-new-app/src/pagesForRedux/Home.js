import { useDispatch, useSelector } from "react-redux";

export const Homes = () => {
  const username = useSelector((state) => state.user.value.username);
  return <h1> This is The Home Page {username}</h1>;
};
