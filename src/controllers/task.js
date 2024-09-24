import { taskService } from "../services/task.js";

export const taskController = {
  async createTask(req, res) {
    return taskService.createTask(req, res);
  },

  async listTask(req, res) {
    return taskService.listTask(req, res);
  },
  async updateTask(req, res) {
    return taskService.updateTask(req, res);
  },
  async deleteTask(req, res) {
    return taskService.deleteTask(req, res);
  },
};
