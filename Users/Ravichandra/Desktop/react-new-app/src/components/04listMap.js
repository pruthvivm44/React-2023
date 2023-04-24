import React from "react";

const ListArray = () => {
  const names = ["Pruthvi", "Balu", "Praveen", "Nandan", "Prajwal", "Kumar"];
  return (
    <div>
      {/* value,key */}
      {/* (()=>) This is a callBack function */}
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );
};
export default ListArray;
