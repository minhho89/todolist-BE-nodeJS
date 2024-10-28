import Task from "../models/task.js";

class TaskRepository {
  async getAllTasks(limit, offset) {
    return await Task.findAll({
    limit: parseInt(limit),   
    offset: parseInt(offset), 
    order: [['created_at', 'DESC']], 
  });
  }

  async getTaskById(id) {
    return await Task.findByPk(id);
  }

  async createTask(task) {
    return await Task.create(task);
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
}

export default new TaskRepository();