import { React, useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const [newtask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    // spread operator (...) allows us to quickly copy all the existing object into another array or object.
    //////////////////////newtask value ...todolist quickly copies into another values
    // const newTodoList = [...todoList, newtask];
    ////////////using spread operator we can access all the values inside this particular todolist variables
    setTodoList([...todoList, newtask]);
  };

  const deleteTask = (taskName) => {
    //////////////////////////keep every element in the list except one todo list name
    ////////////////////A filter function takes inside of task function which is true then keep elements
    ////////////////////and false it deletes
    const newTodoList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });
    //single Line code
    // setTodoList(todoList.filter((task)=> task !== taskName));
    setTodoList(newTodoList);
  };
  return (
    <div className="todo">
      <div className="AddTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Todo;
