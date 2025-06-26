import * as rankService from '../services/rankService.js';

export const getAllRanks = async (req, res) => {
    try {
        const ranks = await rankService.getAllRanks();
        res.status(200).json(ranks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los rangos', error });
    }
};

export const getRankById = async (req, res) => {
    try {
        const rank = await rankService.getRankById(req.params.id);
        if (rank) {
            res.status(200).json(rank);
        } else {
            res.status(404).json({ message: 'Rango no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el rango', error });
    }
};

export const createRank = async (req, res) => {
    try {
        const rank = await rankService.createRank(req.body);
        res.status(201).json(rank);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el rango', error });
    }
};

export const updateRank = async (req, res) => {
    try {
        const updated = await rankService.updateRank(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Rango no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el rango', error });
    }
};

export const deleteRank = async (req, res) => {
    try {
        const deleted = await rankService.deleteRank(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Rango eliminado' });
        } else {
            res.status(404).json({ message: 'Rango no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el rango', error });
    }
};
