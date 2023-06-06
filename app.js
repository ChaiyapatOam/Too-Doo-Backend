const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(cors());
//Const Router
const taskRoute = require("./routes/task.route");

//Use Route
app.use("/tasks", taskRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running at port 3000");
});
