import { useState } from "react";
import OprationBtn from "./components/OprationBtn";

import "./App.css";

function App() {
  const [result, setResult] = useState(0);

  function handleOpration(oprator) {
    const num1 = Number(document.getElementById("input1").value);
    const num2 = Number(document.getElementById("input2").value);

    switch (oprator) {
      case "+":
        setResult(num1 + num2);
        break;

      case "-":
        setResult(num1 - num2);
        break;

      case "*":
        setResult(num1 * num2);
        break;

      case "/":
        setResult(num1 / num2);
        break;

      default:
        setResult(0);
        break;
    }
  }

  function clearInput() {
    document.getElementById("input1").value = "0";
    document.getElementById("input2").value = "0";
  }

  function clearResult() {
    setResult(0);
  }
  return (
    <div className="container">
      <h1>Basic Calculator</h1>

      <div className="input-field">
        <input type="text" id="input1" placeholder="Input 1" />
        <input type="text" id="input2" placeholder="Input 2" />
      </div>
      <h2>= {result}</h2>
      <div className="buttons">
        <OprationBtn
          button_title="Addition"
          symbol={"+"}
          onClick={() => handleOpration("+")}
        />
        <OprationBtn
          button_title="Subtraction"
          symbol={"-"}
          onClick={() => handleOpration("-")}
        />
        <OprationBtn
          button_title="Multiplication"
          symbol={"*"}
          onClick={() => handleOpration("*")}
        />
        <OprationBtn
          button_title="Divison"
          symbol={"/"}
          onClick={() => handleOpration("/")}
        />
      </div>
      <div className="clear-button">
        <OprationBtn button_title="Clear Input" onClick={clearInput} />
        <OprationBtn button_title="Clear Result" onClick={clearResult} />
      </div>
    </div>
  );
}

export default App;
