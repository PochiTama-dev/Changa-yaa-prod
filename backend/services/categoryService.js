import { Category } from '../sequelize/models/Associations.js';

export const getAllCategories = async () => {
  return await Category.findAll();
};

export const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

export const createCategory = async (category) => {
  return await Category.create(category);
};

export const updateCategory = async (id, category) => {
  const [updated] = await Category.update(category, { where: { id } });
  if (updated) {
    return await Category.findByPk(id);
  }
  return null;
};

export const deleteCategory = async (id) => {
  return await Category.destroy({ where: { id } });
};
