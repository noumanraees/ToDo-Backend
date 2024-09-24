import { taskRepository } from "../repositories/task.js";
import {
  createTaskValidation,
  updateTaskValidation,
} from "../validations/task.js";

export const taskService = {
  async createTask(req, res) {
    const { error } = createTaskValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "FAILED",
        message: error.details[0].message,
      });
    }
    const newTask = await taskRepository.createTask({
      ...req.body,
      user: req.user._id,
    });
    if (!newTask) {
      return res.status(400).json({
        status: "FAILED",
        message: "Failed to create task",
      });
    }
    return res.status(201).json({
      status: "SUCCESS",
      message: "Task created successfully",
    });
  },
  async listTask(req, res) {
    const userId = req.user._id;
    const tasks = await taskRepository.listTask(userId);
    return res.status(200).json({
      status: "SUCCESS",
      data: tasks,
    });
  },
  async updateTask(req, res) {
    const { error } = updateTaskValidation.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "FAILED",
        message: error.details[0].message,
      });
    }
    const task = await taskRepository.updateTask({
      newTask: {...req.body},
      taskId: req.params.id,
    });
    console.log(task);
    if (!task) {
      return res.status(400).json({
        status: "FAILED",
        message: "Failed to update task",
      });
    }
    return res.status(200).json({
      status: "SUCCESS",
      message: "Task updated successfully",
    });
  },
  async deleteTask(req, res) {
    const { taskId } = req.body;
    const task = await taskRepository.deleteTask(taskId);
    if (!task) {
      return res.status(400).json({
        status: "FAILED",
        message: "Failed to delete task",
      });
    }
    return res.status(200).json({
      status: "SUCCESS",
      message: "Task deleted successfully",
    });
  },
};
