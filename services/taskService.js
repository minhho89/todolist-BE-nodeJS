import taskRepository from '../repositories/taskRepository.js'

class TaskService {
    async getAllTasks(limit,offset) {
        return await taskRepository.getAllTasks(limit, offset);
    }

    async getTasksByStatus(isDone, limit, page) {
        return await taskRepository.getTasksByStatus(isDone, limit, page);
    }

    async getTaskById(id) {
        return await taskRepository.getTaskById(id);
    }

    async createTask(task) {
        return await taskRepository.createTask(task);
    }

    async updateTask(id, task) {
        return await taskRepository.updateTask(id, task);
    }

    async deleteTask(id) {
        return await taskRepository.deleteTask(id);
    }

    async countTaskByStatus(isDone) {
        return await taskRepository.countTaskByStatus(isDone);
    }
}

export default new TaskService();

