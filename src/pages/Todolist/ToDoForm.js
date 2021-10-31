import { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <button>Сохранить</button>
    </form>
  );
};

export default ToDoForm;
