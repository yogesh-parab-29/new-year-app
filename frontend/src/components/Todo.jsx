import { useState } from "react";

const Todo = ({ todos }) => {
  const [todos, setTodos] = useState([]);

  fetch("http:localhost:3000/todo").then(async function (res) {
    const data = await res.json();
    setTodos(data.todos);
  });
  return (
    <>
      {todos.map((todo, index) => {
        const { title, description, completed } = todo;
        return (
          <div key={index}>
            <h1>{title} </h1>
            <h3>{description}</h3>
            <button>{completed ? "Completed " : "Mark as complete"}</button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
