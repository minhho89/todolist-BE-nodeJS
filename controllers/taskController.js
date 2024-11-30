import taskService from '../services/taskService.js';

class TaskController {
    async getAllTasks(req, res) {
        const {page = 1, limit =10 } = req.query;
        const offset = (page - 1) * limit;
        try {
            const tasks = await taskService.getAllTasks(limit, offset);
            return res.json(tasks);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getTaskById(req, res) {
        try {
            const task = await taskService.getTaskById(req.params.id);
            res.json(task);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    async getTasksByStatus(req, res) {
        try {
            const task = await taskService.getTasksByStatus(req.params.isDone);
            res.json(task);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    async createTask(req, res) {
        try {
            const task = await taskService.createTask(req.body);
            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async updateTask(req, res) {
        try {
            const updateTask = await taskService.updateTask(req.params.id, req.body);
            return res.status(204).json(updateTask);
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    async deleteTask(req, res) {
        try {
            await taskService.deleteTask(req.params.id);
            return res.status(204).json({message: 'Task deleted successfully'});
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}

export default new TaskController();