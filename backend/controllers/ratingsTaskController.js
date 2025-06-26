import * as ratingsTaskService from '../services/ratingsTaskService.js';

export const getAllRatingsTasks = async (req, res) => {
    try {
        const ratingsTasks = await ratingsTaskService.getAllRatingsTasks();
        res.status(200).json(ratingsTasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas calificadas', error });
    }
};

export const getRatingsTaskById = async (req, res) => {
    try {
        const ratingsTask = await ratingsTaskService.getRatingsTaskById(req.params.id);
        if (ratingsTask) {
            res.status(200).json(ratingsTask);
        } else {
            res.status(404).json({ message: 'Tarea calificada no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea calificada', error });
    }
};

export const createRatingsTask = async (req, res) => {
    try {
        const ratingsTask = await ratingsTaskService.createRatingsTask(req.body);
        res.status(201).json(ratingsTask);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea calificada', error });
    }
};

export const updateRatingsTask = async (req, res) => {
    try {
        const updated = await ratingsTaskService.updateRatingsTask(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Tarea calificada no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea calificada', error });
    }
};

export const deleteRatingsTask = async (req, res) => {
    try {
        const deleted = await ratingsTaskService.deleteRatingsTask(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Tarea calificada eliminada' });
        } else {
            res.status(404).json({ message: 'Tarea calificada no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea calificada', error });
    }
};
