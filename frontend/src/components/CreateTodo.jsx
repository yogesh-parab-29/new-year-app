import { useState } from "react";
const CreateToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <button
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "contentType" : "application/json"
              }
            }).then(async (res) => {
              const json = await res.json();
              alert("Todo added")
            });
          }}
        >
          {" "}
          Add a todo
        </button>
      </div>
    </>
  );
};

export default CreateToDo;
