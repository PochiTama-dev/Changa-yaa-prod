import * as categoryService from '../services/categoryService.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las categorías', error });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la categoría', error });
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la categoría', error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updated = await categoryService.updateCategory(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoría', error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const deleted = await categoryService.deleteCategory(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Categoría eliminada' });
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoría', error });
  }
};
