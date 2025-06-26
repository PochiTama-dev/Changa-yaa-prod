import * as usersNotificationService from '../services/usersNotificationService.js';

export const getAllUsersNotifications = async (req, res) => {
    try {
        const usersNotifications = await usersNotificationService.getAllUsersNotifications();
        res.status(200).json(usersNotifications);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notificaciones de los usuarios', error });
    }
};

export const getUsersNotificationById = async (req, res) => {
    try {
        const usersNotification = await usersNotificationService.getUsersNotificationById(req.params.id);
        if (usersNotification) {
            res.status(200).json(usersNotification);
        } else {
            res.status(404).json({ message: 'Notificación de usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la notificación de usuario', error });
    }
};

export const getUsersNotificationsByUserId = async (req, res) => {
    try {
        const usersNotifications = await usersNotificationService.getUsersNotificationsByUserId(req.params.id_user);
        if (usersNotifications.length > 0) {
            res.status(200).json(usersNotifications);
        } else {
            res.status(404).json({ message: 'No se encontraron notificaciones para este usuario' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notificaciones de usuario', error });
    }
};

export const createUsersNotification = async (req, res) => {
    try {
        const usersNotification = await usersNotificationService.createUsersNotification(req.body);
        res.status(201).json(usersNotification);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la notificación de usuario', error });
    }
};

export const updateUsersNotification = async (req, res) => {
    try {
        const updated = await usersNotificationService.updateUsersNotification(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Notificación de usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la notificación de usuario', error });
    }
};

export const deleteUsersNotification = async (req, res) => {
    try {
        const deleted = await usersNotificationService.deleteUsersNotification(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Notificación de usuario eliminada' });
        } else {
            res.status(404).json({ message: 'Notificación de usuario no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la notificación de usuario', error });
    }
};
