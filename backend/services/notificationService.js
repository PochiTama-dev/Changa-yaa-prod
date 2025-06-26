import { Notification } from '../sequelize/models/Associations.js';

export const getAllNotifications = async () => {
  return await Notification.findAll();
};

export const getNotificationById = async (id) => {
  return await Notification.findByPk(id);
};

export const createNotification = async (notification) => {
  return await Notification.create(notification);
};

export const updateNotification = async (id, notification) => {
  const [updated] = await Notification.update(notification, { where: { id } });
  if (updated) {
    return await Notification.findByPk(id);
  }
  return null;
};

export const deleteNotification = async (id) => {
  return await Notification.destroy({ where: { id } });
};
