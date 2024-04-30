const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://yogeshparab11312:Yogesh2905@cluster2905.lmfndco.mongodb.net/new_year_app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
