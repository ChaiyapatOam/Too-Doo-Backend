const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();
router
  .route("/tasks")
  .get(taskController.getAllTask)
  .post(taskController.createTask);
  
router
  .route("/tasks/:id")
  .get(taskController.getOneTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);
module.exports = router;
