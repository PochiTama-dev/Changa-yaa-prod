import * as notificationService from '../services/notificationService.js';

export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.getAllNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las notificaciones', error });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const notification = await notificationService.getNotificationById(req.params.id);
    if (notification) {
      res.status(200).json(notification);
    } else {
      res.status(404).json({ message: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la notificación', error });
  }
};

export const createNotification = async (req, res) => {
  try {
    const notification = await nService.createNotification(req.body);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la notificación', error });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const updated = await notificationService.updateNotification(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la notificación', error });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const deleted = await notificationService.deleteNotification(req.params.id);
    if (deleted) {
        res.status(200).json({ message: 'Notificación eliminada' });
    } else {
      res.status(404).json({ message: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la notificación', error });
  }
};
