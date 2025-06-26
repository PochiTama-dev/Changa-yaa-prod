import * as taskService from '../services/taskService.js';

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas', error });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
};

export const getTaskByRequestId = async (req, res) => {
    try {
        const task = await taskService.getTaskByRequestId(req.params.id_request);
        if (task.length > 0) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
};

export const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
};

export const updateTask = async (req, res) => {
    try {
        const updated = await taskService.updateTask(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deleted = await taskService.deleteTask(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Tarea eliminada' });
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
};
