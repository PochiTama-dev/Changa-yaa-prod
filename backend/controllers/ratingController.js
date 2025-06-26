import * as ratingService from '../services/ratingService.js';

export const getAllRatings = async (req, res) => {
    try {
        const ratings = await ratingService.getAllRatings();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las calificaciones', error });
    }
};

export const getRatingById = async (req, res) => {
    try {
        const rating = await ratingService.getRatingById(req.params.id);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'Calificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la calificación', error });
    }
};

export const getRatingByContractedUser = async (req, res) => {
    try {
        const rating = await ratingService.getRatingByContractedUser(req.params.id_contracted_user);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'Calificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la calificación', error });
    }
};

export const createRating = async (req, res) => {
    try {
        const rating = await ratingService.createRating(req.body);
        res.status(201).json(rating);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la calificación', error });
    }
};

export const updateRating = async (req, res) => {
    try {
        const updated = await ratingService.updateRating(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Calificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el rango', error });
    }
};

export const deleteRating = async (req, res) => {
    try {
        const deleted = await ratingService.deleteRating(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Calificación eliminada' });
        } else {
            res.status(404).json({ message: 'Calificación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la calificación', error });
    }
};
