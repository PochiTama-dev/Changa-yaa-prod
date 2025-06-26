import { Subscription } from '../sequelize/models/Associations.js';

export const getAllSubscriptions = async () => {
    return await Subscription.findAll();
};

export const getSubscriptionById = async (id) => {
    return await Subscription.findByPk(id);
};

export const createSubscription = async (subscription) => {
    return await Subscription.create(subscription);
};

export const updateSubscription = async (id, subscription) => {
    const [updated] = await Subscription.update(subscription, { where: { id } });
    if (updated) {
        return await Subscription.findByPk(id);
    }
    return null;
};

export const deleteSubscription = async (id) => {
    return await Subscription.destroy({ where: { id } });
};
