import { useState } from "react";
import Label from "./components/Label";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState();
  const [message, setMessage] = useState("");

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  function handleHeight(e) {
    setHeight(e.target.value);
  }
  

  function handleSubmit(e) {
    const bmiCalculate = (weight / (height * height)).toFixed(2);
    setBMI(bmiCalculate);
    if (bmiCalculate < 18.5) {
      setMessage("You're Underweight!");
    } else if (bmiCalculate >= 18.5 && bmiCalculate <= 25) {
      setMessage("You're normal weight!");
    } else if (bmiCalculate > 25 && bmiCalculate <= 30) {
      setMessage("You're overweight!");
    } else if (bmiCalculate > 30) {
      setMessage("You're Obese!");
    } else {
      setMessage("Somthing went wrong...");
    }
    e.preventDefault();
  }

  function handleReset(e) {
    setBMI();
    setMessage("");
    e.target.reset();
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading">BMI Calculator</h2>
        <form action="" onReset={handleReset}>
          <Label
            value={weight}
            measurment="Weight"
            unit="kg"
            placeholder="Enter your weight"
            onChange={handleWeight}
          />
          <Label
            value={height}
            measurment="Height"
            unit="meters"
            placeholder="Enter your height"
            onChange={handleHeight}
          />
          <div className="buttons">
            <Button type="submit" text="Submit" onClick={handleSubmit} />
            <Button type="reset" text="Reset" />
          </div>
          <div className="message">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
