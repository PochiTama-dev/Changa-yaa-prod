import * as usersNetworkService from '../services/usersNetworkService.js';

export const getAllUsersNetworks = async (req, res) => {
    try {
        const usersNetworks = await usersNetworkService.getAllUsersNetworks();
        res.status(200).json(usersNetworks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las redes de usuarios', error });
    }
};

export const getUsersNetworkById = async (req, res) => {
    try {
        const usersNetwork = await usersNetworkService.getUsersNetworkById(req.params.id);
        if (usersNetwork) {
            res.status(200).json(usersNetwork);
        } else {
            res.status(404).json({ message: 'Red de usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la red de usuario', error });
    }
};

export const getUsersNetworksByUserId = async (req, res) => {
    try {
        const usersNetworks = await usersNetworkService.getUsersNetworksByUserId(req.params.id_user);
        if (usersNetworks.length > 0) {
            res.status(200).json(usersNetworks);
        } else {
            res.status(404).json({ message: 'No se encontraron redes para este usuario' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las redes de usuario', error });
    }
};

export const createUsersNetwork = async (req, res) => {
    try {
        const usersNetwork = await usersNetworkService.createUsersNetwork(req.body);
        res.status(201).json(usersNetwork);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la red de usuario', error });
    }
};

export const updateUsersNetwork = async (req, res) => {
    try {
        const updated = await usersNetworkService.updateUsersNetwork(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Red de usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la red de usuario', error });
    }
};

export const deleteUsersNetwork = async (req, res) => {
    try {
        const deleted = await usersNetworkService.deleteUsersNetwork(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Red de usuario eliminada' });
        } else {
            res.status(404).json({ message: 'Red de usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la red de usuario', error });
    }
};
