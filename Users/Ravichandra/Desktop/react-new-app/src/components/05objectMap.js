import React from "react";
import { User } from "./06accessPropsOutside";

const ObjectMap = () => {
  const users = [
    //Array of objects
    //Objects//String
    { name: "Pruthvi", age: 24 },
    { name: "Balu", age: 23 },
    { name: "Praveen", age: 21 },
  ];

  // const User = (props) => {
  //   return (
  //     //HTML Format
  //     <div>
  //       {/* grab the name and age */}
  //       {props.name} {props.age}
  //     </div>
  //   );
  // };

  return (
    <div>
      {/* user is an object */}
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
        {
          /* <div>
            {user.name} {user.age}
          </div> */
        }
      })}
    </div>
  );
};
export default ObjectMap;
