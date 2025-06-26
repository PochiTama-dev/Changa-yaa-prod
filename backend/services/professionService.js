import { Profession, Category } from '../sequelize/models/Associations.js';

export const getAllProfessions = async () => {
  return await Profession.findAll({
    include: [{ model: Category }]
  });
};

export const getProfessionById = async (id) => {
  return await Profession.findByPk(id, {
    include: [{ model: Category }]
  });
};

export const createProfession = async (profession) => {
  return await Profession.create(profession);
};

export const updateProfession = async (id, profession) => {
  const [updated] = await Profession.update(profession, { where: { id } });
  if (updated) {
    return await Profession.findByPk(id, {
      include: [{ model: Category }]
    });
  }
  return null;
};

export const deleteProfession = async (id) => {
  return await Profession.destroy({ where: { id } });
};
