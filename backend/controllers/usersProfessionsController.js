import * as usersProfessionsService from '../services/usersProfessionsService.js';

export const getAllUsersProfessions = async (req, res) => {
    try {
        const professions = await usersProfessionsService.getAllUsersProfessions();
        res.status(200).json(professions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las profesiones del usuario.', error });
    }
};

export const createUsersProfessions = async (req, res) => {
    try {
        console.log(req.body);
        
        const profession = await usersProfessionsService.createUsersProfessions(req.body);
        res.status(201).json(profession);
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar la profesión.', error });
    } 
};

export const deleteUsersProfessions = async (req, res) => {
    try {
        const deleted = await usersProfessionsService.deleteUsersProfessions(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Profesión eliminada.' });
        } else {
            res.status(404).json({ message: 'Profesión no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la Profesión.', error });
    }
};

export const deleteUsersProfessionsByUser = async (req, res) => {
    try {
        const deleted = await usersProfessionsService.deleteUsersProfessionsByUser(req.params.idUser);
        if (deleted) {
            res.status(200).json({ message: 'Profesión eliminada.' });
        } else {
            res.status(404).json({ message: 'Profesión no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la Profesión.', error });
    }
};