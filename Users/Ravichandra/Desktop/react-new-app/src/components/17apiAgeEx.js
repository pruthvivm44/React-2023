import { React, useState } from "react";
import Axios from "axios";

function APIAGE() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      //setPredictedAge=res.data
      setPredictedAge(res.data);
    });
  };
  return (
    <div>
      <input
        placeholder="Ex. Pruthvi..."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={fetchData}>Predicate Age</button>
      <h1>Predicted Name:{predictedAge.name} </h1>
      <h1>Predicted Count:{predictedAge.count} </h1>
      <h1>Predicted Age:{predictedAge.age} </h1>
    </div>
  );
}

export default APIAGE;
