import * as usersCategoriesService from '../services/usersCategoriesService.js';

export const getAllUsersCategories = async (req, res) => {
    try {
        const categories = await usersCategoriesService.getAllUsersCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías del usuario.', error });
    }
};

export const createUsersCategories = async (req, res) => {
    try {
        const category = await usersCategoriesService.createUsersCategories(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar la categoría.', error });
    }
};

export const deleteUsersCategories = async (req, res) => {
    try {
        const deleted = await usersCategoriesService.deleteUsersCategories(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Categoría eliminada.' });
        } else {
            res.status(404).json({ message: 'Categoría no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la Categoría.', error });
    }
};