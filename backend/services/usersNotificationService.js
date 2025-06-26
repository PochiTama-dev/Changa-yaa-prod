import {
  UsersNotification,
  User,
  Notification,
  Role,
  Scribbler,
  Profession,
  Category,
  ScribblerImage,
} from "../sequelize/models/Associations.js";

export const getAllUsersNotifications = async () => {
  return await UsersNotification.findAll({
    include: [
      { model: User, as: 'User', include: [{ model: Role }] },
      { model: User, as: 'UserRelated', include: [{ model: Role }] },
      { model: Notification },
      {
        model: Scribbler, include: [
          { model: User, include: [{ model: Role }] },
          { model: Profession, include: [{ model: Category }] },
          { model: ScribblerImage }
        ]
      },
    ],
  });
};

export const getUsersNotificationById = async (id) => {
  return await UsersNotification.findByPk(id, {
    include: [
      { model: User, as: 'User', include: [{ model: Role }] },
      { model: User, as: 'UserRelated', include: [{ model: Role }] },
      { model: Notification },
      {
        model: Scribbler, include: [
          { model: User, include: [{ model: Role }] },
          { model: Profession, include: [{ model: Category }] },
          { model: ScribblerImage }
        ]
      },
    ],
  });
};

export const getUsersNotificationsByUserId = async (id_user) => {
  return await UsersNotification.findAll({
    where: { id_user },
    include: [
      { model: User, as: 'User', include: [{ model: Role }] },
      { model: User, as: 'UserRelated', include: [{ model: Role }] },
      { model: Notification },
      {
        model: Scribbler, include: [
          { model: User, include: [{ model: Role }] },
          { model: Profession, include: [{ model: Category }] },
          { model: ScribblerImage }
        ]
      },
    ],
  });
};

export const createUsersNotification = async (usersNotification) => {
  return await UsersNotification.create(usersNotification);
};

export const updateUsersNotification = async (id, usersNotification) => {
  const [updated] = await UsersNotification.update(usersNotification, {
    where: { id },
  });
  if (updated) {
    return await UsersNotification.findByPk(id, {
      include: [
        { model: User, as: 'User', include: [{ model: Role }] },
        { model: User, as: 'UserRelated', include: [{ model: Role }] },
        { model: Notification },
        {
          model: Scribbler, include: [
            { model: User, include: [{ model: Role }] },
            { model: Profession, include: [{ model: Category }] },
            { model: ScribblerImage }
          ]
        },
      ],
    });
  }
  return null;
};

export const deleteUsersNotification = async (id) => {
  return await UsersNotification.destroy({ where: { id } });
};
