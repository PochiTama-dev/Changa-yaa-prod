import * as usersSubscriptionService from "../services/usersSubscriptionService.js";

export const getAllUsersSubscriptions = async (req, res) => {
  try {
    const usersSubscriptions =
      await usersSubscriptionService.getAllUsersSubscriptions();
    res.status(200).json(usersSubscriptions);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener las suscripciones de los usuarios",
        error,
      });
  }
};

export const getUsersSubscriptionById = async (req, res) => {
  try {
    const usersSubscription =
      await usersSubscriptionService.getUsersSubscriptionById(req.params.id);
    if (usersSubscription) {
      res.status(200).json(usersSubscription);
    } else {
      res.status(404).json({ message: "Suscripción de usuario no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la suscripción de usuario", error });
  }
};

export const getUsersSubscriptionsByUserId = async (req, res) => {
  try {
    const usersSubscriptions =
      await usersSubscriptionService.getUsersSubscriptionsByUserId(
        req.params.id_user
      );
    if (usersSubscriptions.length > 0) {
      res.status(200).json(usersSubscriptions);
    } else {
      res
        .status(404)
        .json({ message: "No se encontraron suscripciones para este usuario" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener las suscripciones de usuario",
        error,
      });
  }
};

export const createUsersSubscription = async (req, res) => {
  try {
    const usersSubscription =
      await usersSubscriptionService.createUsersSubscription(req.body);
    res.status(201).json(usersSubscription);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear la suscripción de usuario", error });
  }
};

export const updateUsersSubscription = async (req, res) => {
  try {
    const updated = await usersSubscriptionService.updateUsersSubscription(
      req.params.id,
      req.body
    );
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: "Suscripción de usuario no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al actualizar la suscripción de usuario",
        error,
      });
  }
};

export const deleteUsersSubscription = async (req, res) => {
  try {
    const deleted = await usersSubscriptionService.deleteUsersSubscription(
      req.params.id
    );
    if (deleted) {
      res.status(200).json({ message: "Suscripción de usuario eliminada" });
    } else {
      res.status(404).json({ message: "Suscripción de usuario no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la suscripción de usuario", error });
  }
};

export const validateUsersSubscription = async (req, res) => {
  try {
    const usersSubscription =
      await usersSubscriptionService.getUsersSubscriptionById(req.params.id);

    if (!usersSubscription) {
      return res
        .status(404)
        .json({ message: "Suscripción de usuario no encontrada" });
    }

    const timeElapsed =
      Date.now() - new Date(usersSubscription.created_at).getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (timeElapsed > oneDayInMilliseconds || !usersSubscription.enabled) {
      return res.status(400).json({
        message: "La suscripción ha expirado o está deshabilitada",
        status: "expired",
      });
    }

    res.status(200).json({
      message: "La suscripción es válida",
      status: "valid",
      usersSubscription,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al validar la suscripción de usuario", error });
  }
};
