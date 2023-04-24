import { React, useState } from "react";
import Axios from "axios";

function API() {
  const [catFact, setCatFact] = useState("");

  const getData = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  //Normal Fetch

  //URL
  //   fetch("https://catfact.ninja/fact")
  //     //then grab the response from the api request the trun it into javascript or {JSON} object
  //     .then((res) => res.json())
  //     //then grab that value
  //     .then((data) => {
  //       console.log(data);
  //     });

  //by using tha Axios fetching it just grap the response from the url and console log the data
  //    Axios.get("https://catfact.ninja/fact").then((res) => {
  //     console.log(res.data);
  //   });

  // Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });

  return (
    <div>
      <button onClick={getData}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default API;
