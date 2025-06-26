import { Router } from 'express';
import * as taskController from '../controllers/taskController.js';

const router = Router();

router
    .get('/', taskController.getAllTasks)
    .get('/:id', taskController.getTaskById)
    .get('/request/:id_request', taskController.getTaskByRequestId)
    .post('/', taskController.createTask)
    .put('/:id', taskController.updateTask)
    .delete('/:id', taskController.deleteTask);

export default router;
