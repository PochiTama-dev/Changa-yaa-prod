import * as subscriptionService from '../services/subscriptionService.js';

export const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await subscriptionService.getAllSubscriptions();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las suscripciones', error });
    }
};

export const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await subscriptionService.getSubscriptionById(req.params.id);
        if (subscription) {
            res.status(200).json(subscription);
        } else {
            res.status(404).json({ message: 'Suscripción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la suscripción', error });
    }
};

export const createSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionService.createSubscription(req.body);
        res.status(201).json(subscription);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la suscripción', error });
    }
};

export const updateSubscription = async (req, res) => {
    try {
        const updated = await subscriptionService.updateSubscription(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Suscripción no encontrada' });
        }
    } catch (error) {
        res.status500().json({ message: 'Error al actualizar la suscripción', error });
    }
};

export const deleteSubscription = async (req, res) => {
    try {
        const deleted = await subscriptionService.deleteSubscription(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Suscripción eliminada' });
        } else {
            res.status(404).json({ message: 'Suscripción no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la suscripción', error });
    }
};
