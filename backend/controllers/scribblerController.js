import * as scribblerService from '../services/scribblerService.js';

export const getAllScribblers = async (req, res) => {
    try {
        const scribblers = await scribblerService.getAllScribblers();
        res.status(200).json(scribblers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los borradores', error });
    }
};

export const getScribblerById = async (req, res) => {
    try {
        const scribbler = await scribblerService.getScribblerById(req.params.id);
        if (scribbler) {
            res.status(200).json(scribbler);
        } else {
            res.status(404).json({ message: 'Borrador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el borrador', error });
    }
};

export const getScribblerByIdUser = async (req, res) => {
    try {
        const scribbler = await scribblerService.getScribblerByIdUser(req.params.idUser);
        if (scribbler) {
            res.status(200).json(scribbler);
        } else {
            res.status(404).json({ message: 'Borrador no encontrado' }); 
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el borrador', error });
    }
};

export const createScribbler = async (req, res) => {
    try {
        const scribbler = await scribblerService.createScribbler(req.body);
        res.status(201).json(scribbler);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el dibujante', error });
    }
};

export const updateScribbler = async (req, res) => {
    try {
        const updated = await scribblerService.updateScribbler(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Borrador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el borrador', error });
    }
};

export const deleteScribbler = async (req, res) => {
    try {
        const deleted = await scribblerService.deleteScribbler(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Borrador eliminado' });
        } else {
            res.status(404).json({ message: 'Dibujante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el borrador', error });
    }
};
