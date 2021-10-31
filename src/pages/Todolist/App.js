import { useState } from "react";

import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (inputValue) => {
    if (!inputValue) return;

    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: inputValue,
      isComplete: false,
    };

    setTodos((prevState) => [...prevState, newTask]);
  };

  const removeTask = (id) => {
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos((prevState) => [
      ...prevState.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, isComplete: !todo.isComplete };
      }),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default App;
