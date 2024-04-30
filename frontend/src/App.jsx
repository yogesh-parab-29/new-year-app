import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateToDo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateToDo />
      <Todo todos={[
        {
          title: "Todo 1",
          description: "Todo 1 description",
          completed: false
        }
      ]}/>
    </>
  );
}

export default App;
