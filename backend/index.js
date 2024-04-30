const express = require("express");
const { createTodoSchema } = require("./types");
const app = express();
const {todo} = require("./db/database");
const { updateTodoSchema } = require("./types");
const cors = require("cors");

app.use(express.json());
app.use(cors())

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsePayLoad = createTodoSchema.safeParse(createPayLoad);
  console.log(parsePayLoad.success);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }

  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({
    msg: "Todo created successfully",
  });
});
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.status(200).json({
    todos,
  });
});
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayLoad = updateTodoSchema.safeParse(updatePayload);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
  // const user = todo.findOne({
  //   title: createPayLoad.title,
  // });
  await todo.update(
    {
      // title: createPayLoad.title
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo completed successfully",
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
