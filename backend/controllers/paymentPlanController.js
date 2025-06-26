import * as paymentPlanService from '../services/paymentPlanService.js';
import fs from 'fs';

export const getAllPaymentPlans = async (req, res) => {
  try {
    const plans = await paymentPlanService.getAllPaymentPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los planes de pago...', error });
  }
};

export const getPaymentPlanById = async (req, res) => {
  try {
    const plan = await paymentPlanService.getPaymentPlanById(req.params.id);
    if (plan) {
      res.status(200).json(plan);
    } else {
      res.status(404).json({ message: 'Plan de pago no encontrado...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el plan de pago...', error });
  }
};

export const createPaymentPlan = async (req, res) => {
  try {
    const plan = await paymentPlanService.createPaymentPlan(req);
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el plan de pago...', error });
  }
};

export const updatePaymentPlan = async (req, res) => {
  try {
    const updated = await paymentPlanService.updatePaymentPlan(req);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'El plan de pago no pudo ser modificado...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el plan de pago...', error });
  }
};

export const deletePaymentPlan = async (req, res) => {
  try {
    const plan = await paymentPlanService.getPaymentPlanById(req.params.id);
    fs.existsSync(plan.icon) && fs.unlinkSync(plan.icon);
    const deleted = await paymentPlanService.deletePaymentPlan(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Plan de pago eliminado con exito!' });
    } else {
      res.status(404).json({ message: 'Plan de pago no encontrado...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el plan de pago...', error });
  }
};