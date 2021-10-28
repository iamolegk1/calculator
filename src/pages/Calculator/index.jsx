import React, { useState } from "react";

import CalculatorInput from "./components/CalculatorInput";
import Button from "../../components/Button";
import "./Calculator.css";

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    firstValue: "",
    secondValue: "",
    mathMethod: "",
    result: "",
  });

  const onChangeInputValue = (event) => {
    const currentValue = event.target.value;

    if (!!calculatorData.mathMethod) {
      setCalculatorData((prevState) => {
        return { ...prevState, secondValue: currentValue };
      });
    } else {
      setCalculatorData((prevState) => {
        return { ...prevState, firstValue: currentValue };
      });
    }
  };

  const onChangeMathMethod = (methodType) => {
    if (!calculatorData.firstValue) return;

    setCalculatorData((prevState) => {
      return { ...prevState, mathMethod: methodType, result: "" };
    });
  };

  const onGetResult = () => {
    if (
      !calculatorData.firstValue ||
      !calculatorData.secondValue ||
      !calculatorData.mathMethod
    )
      return;

    const getResult = () => {
      if (calculatorData.mathMethod === "+") {
        return +calculatorData.firstValue + +calculatorData.secondValue;
      }
      if (calculatorData.mathMethod === "-") {
        return +calculatorData.firstValue - +calculatorData.secondValue;
      }
      if (calculatorData.mathMethod === "×") {
        return +calculatorData.firstValue * +calculatorData.secondValue;
      }
      if (calculatorData.mathMethod === "÷") {
        return +calculatorData.firstValue / +calculatorData.secondValue;
      }
    };

    const result = getResult();

    setCalculatorData({
      firstValue: result,
      secondValue: "",
      mathMethod: "",
      result,
    });
  };

  return (
    <>
      <div>
        <CalculatorInput
          value={
            calculatorData.result
              ? calculatorData.firstValue
              : calculatorData.mathMethod
              ? calculatorData.secondValue
              : calculatorData.firstValue
          }
          onChange={onChangeInputValue}
        />
      </div>
      <div>
        <Button title="Get result" onClick={onGetResult} />
        <Button title="+" onClick={() => onChangeMathMethod("+")} />
        <Button title="-" onClick={() => onChangeMathMethod("-")} />
        <Button title="×" onClick={() => onChangeMathMethod("×")} />
        <Button title="÷" onClick={() => onChangeMathMethod("÷")} />
      </div>
    </>
  );
};

export default Calculator;
