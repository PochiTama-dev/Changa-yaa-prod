import * as reasonService from '../services/reasonService.js';

export const getAllReasons = async (req, res) => {
    try {
        const reasons = await reasonService.getAllReasons();
        res.status(200).json(reasons);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las razones', error });
    }
};

export const getReasonById = async (req, res) => {
    try {
        const reason = await reasonService.getReasonById(req.params.id);
        if (reason) {
            res.status(200).json(reason);
        } else {
            res.status(404).json({ message: 'Razón no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la razón', error });
    }
};

export const getReasonByStar = async (req, res) => {
    try {
        const reason = await reasonService.getReasonByStar(req.params.stars);
        if (reason) {
            res.status(200).json(reason);
        } else {
            res.status(404).json({ message: 'Razón no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la razón', error });
    }
};

export const createReason = async (req, res) => {
    try {
        const reason = await reasonService.createReason(req.body);
        res.status(201).json(reason);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la razón', error });
    }
};

export const updateReason = async (req, res) => {
    try {
        const updated = await reasonService.updateReason(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Razón no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la razón', error });
    }
};

export const deleteReason = async (req, res) => {
    try {
        const deleted = await reasonService.deleteReason(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Razón eliminada' });
        } else {
            res.status(404).json({ message: 'Razón no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la razón', error });
    }
};
