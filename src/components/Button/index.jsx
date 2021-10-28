import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button className="custom-btn" type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
