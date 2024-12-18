import Task from "../models/task.js";

class TaskRepository {
  async getAllTasks(limit, offset) {
    return await Task.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["updated_at", "ASC"]],
    });
  }

  async getTaskById(id) {
    return await Task.findByPk(id);
  }

  async getTasksByStatus(isDone, limit, page) {
    //console.log({ isDone, limit, offset });
    return await Task.findAll({
      limit: parseInt(limit),
      offset: parseInt(page * limit),
      where: {
        isDone: isDone,
      },
      order: [["updated_at", "DESC"]],
    });
  }

  async createTask(task) {
    return await Task.create(task);
    //return await Task.bulkCreate(task);
  }

  async updateTask(id, task) {
    return await Task.update(task, {
      where: {
        id: id,
      },
    });
  }

  async deleteTask(id) {
    return await Task.destroy({
      where: {
        id: id,
      },
    });
  }

  async countTaskByStatus(isDone) {
    return await Task.count({
      where: {
        isDone: isDone,
      },
    });
  }
}

export default new TaskRepository();
