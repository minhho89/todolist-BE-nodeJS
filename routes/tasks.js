// routes/taskRoutes.js
import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.get('/tasks/status/:isDone', taskController.getTasksByStatus);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.get('/tasks/count/:isDone', taskController.countTaskByStatus);

export default router;