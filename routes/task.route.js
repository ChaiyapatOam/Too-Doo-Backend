const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();
router
  .route("/")
  .get(taskController.getAllTask)
  .post(taskController.createTask);
  
router
  .route("/:id")
  .get(taskController.getOneTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);
module.exports = router;
