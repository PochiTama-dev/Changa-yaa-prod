import * as budgetService from '../services/budgetService.js';

export const getAllBudgets = async (req, res) => {
  try {
    const budget = await budgetService.getAllBudgets();
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los presupuesto', error  });
  }
};

export const getBudgetById = async (req, res) => {
  try {
    const budget = await budgetService.getBudgetById(req.params.id);
    if (budget) {
      res.status(200).json(budget);
    } else {
      res.status(404).json({ message: 'Presupuesto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los presupuesto', error });
  }
};

export const createBudget = async (req, res) => {
  try {
    const budget = await budgetService.createBudget(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el presupuesto', error });
  }
};

export const updateBudget = async (req, res) => {
  try {
    const updated = await budgetService.updateBudget(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Presupuesto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el presupuesto', error});
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const deleted = await budgetService.deleteBudget(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Presupuesto eliminado' });
    } else {
      res.status(404).json({ message: 'Presupuesto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el presupuesto', error });
  }
};