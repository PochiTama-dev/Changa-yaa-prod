import * as usersRankService from '../services/usersRankService.js';

export const getAllUsersRanks = async (req, res) => {
    try {
        const usersRanks = await usersRankService.getAllUsersRanks();
        res.status(200).json(usersRanks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los rangos de los usuarios', error });
    }
};

export const getUsersRankById = async (req, res) => {
    try {
        const usersRank = await usersRankService.getUsersRankById(req.params.id);
        if (usersRank) {
            res.status(200).json(usersRank);
        } else {
            res.status(404).json({ message: 'Rango de usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el rango de usuario', error });
    }
};

export const getUsersRanksByUserId = async (req, res) => {
    try {
        const usersRanks = await usersRankService.getUsersRanksByUserId(req.params.id_user);
        if (usersRanks.length > 0) {
            res.status(200).json(usersRanks);
        } else {
            res.status(404).json({ message: 'No se encontraron rangos para este usuario' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los rangos de usuario', error });
    }
};

export const createUsersRank = async (req, res) => {
    try {
        const usersRank = await usersRankService.createUsersRank(req.body);
        res.status(201).json(usersRank);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el rango de usuario', error });
    }
};

export const updateUsersRank = async (req, res) => {
    try {
        const updated = await usersRankService.updateUsersRank(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Rango de usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el rango de usuario', error });
    }
};

export const deleteUsersRank = async (req, res) => {
    try {
        const deleted = await usersRankService.deleteUsersRank(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Rango de usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Rango de usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el rango de usuario', error });
    }
};
