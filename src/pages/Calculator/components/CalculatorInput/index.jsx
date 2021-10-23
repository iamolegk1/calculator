import React from "react";

const CalculatorInput = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} />;
};

export default CalculatorInput;
