const ToDo = ({ todo, toggleTask, removeTask }) => {
  return (
    <div className="item-todo">
      <div
        className={todo.isComplete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.title}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
};

export default ToDo;
