import Task from "../schema/task.js";

export const taskRepository = {
  async createTask(newTask) {
    return await Task.create(newTask);
  },
  async updateTask(payload) {
    return await Task.findOneAndUpdate(
      { _id: payload.taskId },
      payload.newTask
    );
  },
  async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  },
  async listTask(userId) {
    return await Task.find({
      user: userId,
    });
  },
};
