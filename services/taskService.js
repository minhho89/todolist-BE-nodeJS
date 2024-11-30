import taskRepository from '../repositories/taskRepository.js'

class TaskService {
    async getAllTasks(limit,offset) {
        return await taskRepository.getAllTasks(limit, offset);
    }

    async getTaskByStatus(isDone) {
        return await taskRepository.getTaskByStatus(isDone);
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
}

export default new TaskService();

