import { Category, UsersCategory } from '../sequelize/models/Associations.js';

export const getAllUsersCategories = async () => {
    return await UsersCategory.findAll({ include: { model: Category } });
};

export const createUsersCategories = async (userData) => {
    return await UsersCategory.bulkCreate( userData);
};

export const deleteUsersCategories = async (id) => {
    return await UsersCategory.destroy({ where: { id: id } });
};