import { UsersSubscription, User, Subscription, Role } from '../sequelize/models/Associations.js';

export const getAllUsersSubscriptions = async () => {
    return await UsersSubscription.findAll({
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Subscription }
        ]
    });
};

export const getUsersSubscriptionById = async (id) => {
    return await UsersSubscription.findByPk(id, {
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Subscription }
        ]
    });
};

export const getUsersSubscriptionsByUserId = async (id_user) => {
    return await UsersSubscription.findAll({
        where: { id_user },
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Subscription }
        ]
    });
};

export const createUsersSubscription = async (usersSubscription) => {
    return await UsersSubscription.create(usersSubscription);
};

export const updateUsersSubscription = async (id, usersSubscription) => {
    const [updated] = await UsersSubscription.update(usersSubscription, { where: { id } });
    if (updated) {
        return await UsersSubscription.findByPk(id, {
            include: [
                { model: User, include: [{ model: Role }] },
                { model: Subscription }
            ]
        });
    }
    return null;
};

export const deleteUsersSubscription = async (id) => {
    return await UsersSubscription.destroy({ where: { id } });
};
