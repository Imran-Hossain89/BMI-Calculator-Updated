import React, { useState } from "react";
import "./Style.css";

const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [score, setScore] = useState();
  const [message, setMessage] = useState();

  const result = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Plese provide your information");
    }
    const updatedHeight = height / 39.37;
    const result = (weight / (updatedHeight * updatedHeight)).toFixed(2);
    setScore(result);

    if (result < 25) {
      setMessage("You are underweight! Please take care of your health.");
    } else if (result >= 25 && result < 30) {
      setMessage("You are healthy");
    } else {
      setMessage("You are overweight! Please take care of your health.");
    }
  };

  const reload = () => {
    setWeight("");
    setHeight("");
    setScore("");
    setMessage("");
  };

  return (
    <div className="main-div">
      <h1>BMI Calculator</h1>
      <div className="input-div">
        <div className="weight">
          <level>Weight(kg)</level>
          <input
            type="text"
            placeholder="write your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="height">
          <level>Height(inch)</level>
          <input
            type="number"
            placeholder="write your height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          ></input>
        </div>
      </div>
      <button id="result-btn" onClick={result}>
        Submit
      </button>
      <button className="reload-btn" onClick={reload}>
        Reload
      </button>
      <div>
        <p>Your BMI score is: {score} </p>
        <p> your score is {score} {message}</p>
      </div>
    </div>
  );
};

export default Bmi;
