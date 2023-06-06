const { Task } = require("../model/Task");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

exports.getOneTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndRemove(req.params.id);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};
