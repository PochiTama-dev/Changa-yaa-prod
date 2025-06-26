import { Budget, User,Product, Role } from '../sequelize/models/Associations.js';

export const getAllBudgets = async () => {
  return await Budget.findAll({
    include: [
      { model: User, as: 'buyer', include: [{ model: Role }] },
      { model: User, as: 'seller', include: [{ model: Role }] },
      { model: Product, include: [{ model: User }]  }
    ]
  });
};

export const getBudgetById = async (id) => {
  return await Budget.findByPk(id, {
    include: [
      { model: User, as: 'buyer', include: [{ model: Role }] },
      { model: User, as: 'seller', include: [{ model: Role }] },
      { model: Product, include: [{ model: User }]  }
    ]
  });
};

export const createBudget = async (budget) => {
  return await Budget.create(budget);
};

export const updateBudget = async (id, budget) => {
  const [updated] = await Budget.update(budget, { where: { id } });
  if (updated) {
    return await Budget.findByPk(id, {
      include: [
        { model: User, as: 'buyer', include: [{ model: Role }] },
        { model: User, as: 'seller', include: [{ model: Role }] },
        { model: Product, include: [{ model: User }]  }
      ]
    });
  }
  return null;
};

export const deleteBudget = async (id) => {
  return await Budget.destroy({ where: { id } });
}; 