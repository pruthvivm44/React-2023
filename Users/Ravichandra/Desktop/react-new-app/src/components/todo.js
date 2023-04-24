import { React, useState } from "react";

function Example() {
  const [todoList, setTodoList] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  const addTodos = () => {
    const newTodo = [...todoList, addTodo];
    setTodoList(newTodo);
  };
  return (
    <div className="Example">
      <div className="Add todo">
        <input onChange={handleChange} />
        <button onClick={addTodos}>Add todos</button>
      </div>
      <div className="todo list">
        {todoList.map((list) => {
          return <h1>{list}</h1>;
        })}
      </div>
    </div>
  );
}

export default Example;
